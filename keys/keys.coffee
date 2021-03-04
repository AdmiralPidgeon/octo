window.onload = ->

    curry = "2dd86aa78506478b72062af767d91221d9f7c4946604cc1f325ac224bf2825a8"
    userKey = document.URL.split('?')[1]
    hashedUserKey = await secret.digest userKey + curry
    #log 'beep: ' + keyRings[hashedUserKey].counter

    if keyRings[hashedUserKey]
        keyRing = await secret.decrypt userKey, keyRings[hashedUserKey]
        keyRing = JSON.parse keyRing
        log "#{Object.keys(keyRing).length} keys added."

    pageKeys = (vault.get 'pageKeys') ? {}
    for pageName, pageKey of keyRing
        pageKeys[pageName] = pageKey
    vault.set 'pageKeys', pageKeys

    format = (pageName, pageKey) ->
        pageName.length + "#{pageName}: ".padEnd(8, ' ') + pageKey

    { div, pre, h2 } = html.elements()
    replaceInnerHTML 'body', div {},
        h2 "keys stored: #{Object.keys(pageKeys).length}"
        pre {}, (format pageName, pageKey for pageName, pageKey of pageKeys)\
                .sort().map( (arg) -> arg[1..]).join('\n')

    css '''

    select body
        fullscreen
        display grid
        place-content center
        font-family mono

    select pre
        font-size 16px

    '''

## key rings ###################################################################

keyRings = {}

keyRings["b2d90cafb951e3ba8a9acd223e57e02ec66fb32a026bfdf45c9e4684e3ea55f8"] =
counter: "762c425386a27702da086f49bb43f60c", encryptedMessage: '''
d5cfca6fa48b52342b455971aaa67375d8e6e76601ca34ae3502965a0ce710f4d46db06fac0993d9bff64b373ecff5e5be44
2acfd84b9c39176f5d81900eeda1c0d8d8e57059770ddab56ac1f726a122d156c243791bbc41f9964af20c6db0c97d08f1bf
10114e69e4cc79140776d3978be5ec42c485a87cd4424c901491f488cd79c9c0e4be4df3dcb77464e8fa08054f4a415123d2
7a39e61c5e96fa05b9272fccfa66e2f1dc284b701b8ecc2cd0074994ba78d5472009406b28d607348df9fb01a58c6e653367
0146abb8a8c0f2fc6d995aa91f744c6cb373827f1931d493c99fc6c410cec8ebc1d513dba498a5170b83173ef5945530936e
132b72bb33667009678d17fad2c0984d8f974d524e37b6e04826cbe18e033346f398204e9d67a2aadf248ab8b38184
'''.replaceAll('\n', '')

keyRings["e9343b2a12bf25ad9494fcf160595ba0fc8ba7b771fc671091e935fc6631d0e3"] =
counter: "65e74866ddaadad45e84088efc34a6a2", encryptedMessage: '''
610ba2b896b3d4183d91944782b931003f4ea1b317a379570193c218660cf3e4e5b1685a8dc51529939646dbe7fcabd7354a
a0b618f3cc3a9e27fefd08eb964ff42902315b740475dd46f43d7bc8f97f54d6893713b3093f5c0f3f51e6d59a46d66ec14a
b7903588efefe092276d9de2c3b9ceeb8ec7773dbbc6c920da7e1862fccdb4e83f4a357c0576535d8011c4ca48a856768c98
a00de10d853b0d0b1d2af9b15796767937f08482e449bedc932d2f17f682775f9b45e11ddc2628aac57f665982714c5ec819
1d2b9d67a7ae8b25bd70e1624353a2621d3fba167317a7784e0325d2a5814235fe66fc1b91d9a4312cfe49f5ca66fc0a709d
f35f612f5e72738587c5328e1011fbb5db9e45c56accdb45aa84f70c77832b664c73b3318f09b40baa6ced1717a3c6
'''.replaceAll('\n', '')

