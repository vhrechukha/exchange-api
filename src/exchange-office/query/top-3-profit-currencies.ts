/* eslint-disable max-len */
/**
 * Exchange Profit Calculation
 *    Calculated for each transaction, considers whether the "from" currency matches with the exchange's from currency or not.
 *    If they match, calculates the profit using the difference between the ask price in terms of outgoing and incoming currency rates.
 *    If they don't match, calculates the profit using the difference between the ask price in terms of incoming and outgoing currency rates.
 *
 * Ranking Countries:
 *    The query proceeds to rank countries based on the total profit of their exchangers.
 *
 * Final Results:
 *   The total profit for each group is calculated by summing up the exchanger profits.
 *   The query limits the output to the top 3 results.
 */
const topExchangersByCountryQuery = `WITH exchange_profit AS (
  SELECT
    e."exchangeOfficeId" AS exchanger_id,
    r."from" AS from_currency,
    r."to" AS to_currency,
    SUM(
      CASE
        WHEN r."from" = e."from" THEN (e.ask / r."out") - (e.ask / r."in")
        ELSE (e.ask / r."in") - (e.ask / r."out")
      END
    ) AS profit
  FROM
    exchange.exchange e
    JOIN exchange.rate r ON e."from" = r."from" AND e."to" = r."to"
  WHERE
    e."date" >= NOW() - INTERVAL '1 month'
  GROUP BY
    e."exchangeOfficeId", r."from", r."to"
),
ranked_countries AS (
  SELECT
    c.id AS country_id,
    c."name" AS country_name,
    ROW_NUMBER() OVER (ORDER BY SUM(ep.profit) DESC) AS country_rank
  FROM
    exchange.country c
    JOIN exchange.exchange_office eo ON c.id = eo."countryId"
    JOIN exchange_profit ep ON eo.id = ep.exchanger_id
  GROUP BY
    c.id, c."name"
)
SELECT
  rc.country_rank,
  rc.country_name,
  eo."name" AS exchanger_name,
  SUM(ep.profit) AS total_profit
FROM
  ranked_countries rc
JOIN
  exchange.exchange_office eo ON eo."countryId" = rc.country_id
JOIN
  exchange_profit ep ON ep.exchanger_id = eo.id
GROUP BY
  rc.country_rank, rc.country_name, eo."name"
ORDER BY
  rc.country_rank, total_profit DESC
LIMIT 3`;

export default topExchangersByCountryQuery;
