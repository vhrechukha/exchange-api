## How to change the code to support different file format versions?
To make the code compatible with versions, we can adjust it to identify the version from the file's additional details/meta-data. 
Create specialized parsing functions for each version.

## How will the import system change if in the future we need to get this data from a web API?
Already added, needs more testing, data validation and limitation.

## If in the future it will be necessary to do the calculations using the national bank rate, how could this be added to the system?
To bring national bank rates into the system, we can link the bank's rate data via its API. 
Users can pick between our exchanger or bank rates in settings. 
After we need to adjust queries based on the chosen setup.

## How would it be possible to speed up the execution of requests if the task allowed you to update market data once a day or even less frequently? Please explain all possible solutions you could think of.
1. **Caching:** Store frequently accessed data in memory to avoid repeated database queries.
2. **Materialized Views:** Precompute complex query results for one day.
3. **Optimized Indexing**
4. **Query Caching:** Cache query results for repeated requests.