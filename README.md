When we have use inline script tag or external script file, HTML parser would be blocked while JS is being fetched and executed.

Placing script tag in the header would only parsed the file till the header tag and then rest of the parsing would resume when script has been fetched and executed.

To mitigate this issue, either we can put script tag at the bottom of body tag or use async or defer attributes.
