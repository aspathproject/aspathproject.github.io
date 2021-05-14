::: tip ASPATH is on early stage development
You can help us to get faster to our first stable release!

:::

We have some pending quests that need to be addressed:
- **Website internationalization (i18n)**: This website is powered by [VuePress](https://vuepress.vuejs.org/), an static page generator that supports multi-language content out of the box.
  
  To check how VuePress main website implements multiple languages, their [github repo](https://github.com/vuejs/vuepress/tree/master/packages/docs) is available publicly.

  To do list:
  - [ ] Implement i18n functions on VuePress (needed for implementing other languages)
  - [ ] Translate to Spanish
  - [ ] Translate to Portuguese

- **Refactoring / Code Quality**: There are a lot of refactoring opportunities on both frontend and backend projects. Contributions that help get a better responsibility separation and adopt better code patterns are welcome.
  
  To do list:
  - [ ] Frontend: Split Vue components into smaller parts
  - [ ] Backend: Decouple API logic from business logic.


- **Quagga Parser Rewrite**: The current quagga parser module uses 2 regex codes of an Apache-2.0 Licensed project. In order to keep the project MIT-licensed, a rewrite should be done to get rid of those snippets coming from a more restrictive licensing.

  To do list:
  - [ ] Re-implement the following regex:
  ```python
      APACHE_REGEX_3_2 = re.compile(r'^\s*(?P<status_codes>(s|x|S|d|h|\*|\>|m|r|\s)+)?'
                                    r'(?P<path_type>(i|e|c|l|a|r|I))?\s{10,20}'
                                    r'(?P<next_hop>[a-zA-Z0-9\.\:]+)'
                                    r' +(?P<metric>(?:\d+(?=[ \d]{13}\d ))?) +(?P<weight>\d+)'
                                    r'(?P<path>[0-9 \S\{\}]+)$')
  ```                              
  - [ ] Re-implement the following regex:
    ```python
    APACHE_REGEX_P4 = re.compile(r'^\s*(?P<status_codes>(?:s|x|S|d|h|m|r|\*|\>|\s)+)?'
                            r'(?P<path_type>(?:i|e|c|l|a|r|I))? *'
                            r'(?P<prefix>[a-zA-Z0-9\.\:\/\-\[\]]+) +'
                            r'(?P<next_hop>[a-zA-Z0-9\.\:]+) +'
                            r'(?P<metric>(?:\d+(?=[ \d]{13}\d ))?) +'
    #                       r'(?P<local_prf>(?:\d+(?=[ \d]{6}\d ))?) +'
                            r'(?P<weight>\d+)(?P<path>[0-9 \S\{\}]+)$')
    ```

    Given that we are not using all that data, a much simpler regex string can be implemented. Also, the current implementation didn't completely work on sample PCH `show ip bgp` snapshots, hence the commented line.

    ## Where to start

    - [Join our Discord server](https://discord.gg/2FT4XzNvqq)
    - [Write an issue on Github](https://github.com/aspathproject/aspath/issues/new) once you identify something you can contribute on.
    - [Create a Pull request](https://github.com/aspathproject/aspath/compare) referencing the github issue you worked on.