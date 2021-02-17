// Generated by LiveScript 1.6.0
(function(){
  var _, $, $$, randomInteger, randomFloat, randomElement, vaultStore, vaultRetrieve, vaultRemove, vaultClear, toString$ = {}.toString, slice$ = [].slice, arrayFrom$ = Array.from || function(x){return slice$.call(x);};
  _ = window;
  _.log = console.log;
  _.clear = console.clear;
  _.table = console.table;
  _.max = Math.max;
  _.min = Math.min;
  _.isEven = function(it){
    return it % 2 === 0;
  };
  _.isOdd = function(it){
    return it % 2 !== 0;
  };
  _.getLines = function(it){
    return it.split(/\r?\n/);
  };
  _.zFill = function(n, m){
    return (n + "").padStart(m, '0');
  };
  _.sleep = function(ms){
    return new Promise(function(resolve){
      return setTimeout(resolve, ms);
    });
  };
  $ = function(it){
    return document.querySelector(it);
  };
  $$ = function(it){
    return document.querySelectorAll(it);
  };
  _.$ = $;
  _.$$ = $$;
  _.libraTest = {};
  _.shuffle = function(array){
    var m, i, t;
    m = array.length;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  };
  randomInteger = function(min, max){
    var randomNumber, multiplier, result;
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNumber = Math.random();
    multiplier = max - min + 1;
    result = randomNumber * multiplier + min;
    return Math.floor(result);
  };
  randomFloat = function(min, max){
    return Math.random() * (max - min) + min;
  };
  randomElement = function(array){
    var lastIndex;
    lastIndex = array.length - 1;
    return array[randomInteger(0, lastIndex)];
  };
  _.random = function(a, b){
    if (a === undefined) {
      return Math.random();
    }
    if (Array.isArray(a)) {
      return randomElement(a);
    }
    if (b === undefined) {
      return randomInteger(1, a);
    }
    return randomInteger(a, b);
  };
  _.random.int = randomInteger;
  _.random.float = randomFloat;
  _.random.element = randomElement;
  _.isType = curry$(function(type, x){
    return toString$.call(x).slice(8, -1) === type;
  });
  _.isString = function(it){
    return toString$.call(it).slice(8, -1) === 'String';
  };
  _.isNumber = function(it){
    return toString$.call(it).slice(8, -1) === 'Number' && !Number.isNaN(it);
  };
  _.isBoolean = function(it){
    return toString$.call(it).slice(8, -1) === 'Boolean';
  };
  _.isBool = function(it){
    return toString$.call(it).slice(8, -1) === 'Boolean';
  };
  _.isArray = function(it){
    return toString$.call(it).slice(8, -1) === 'Array';
  };
  _.isObject = function(it){
    return toString$.call(it).slice(8, -1) === 'Object';
  };
  _.isFunction = function(it){
    return toString$.call(it).slice(8, -1) === 'Function';
  };
  _.isFunc = function(it){
    return toString$.call(it).slice(8, -1) === 'Function';
  };
  _.isUndefined = function(it){
    return toString$.call(it).slice(8, -1) === 'Undefined';
  };
  _.isVoid = function(it){
    return toString$.call(it).slice(8, -1) === 'Undefined';
  };
  _.isNull = function(it){
    return toString$.call(it).slice(8, -1) === 'Null';
  };
  _.isNaN = function(it){
    return Number.isNaN(it);
  };
  _.html = function(html){
    return window.onload = function(){
      return $('body').innerHTML = html;
    };
  };
  _.loadHTML = function(html){
    return $('body').innerHTML = html;
  };
  _.replaceInnerHTML = function(node, html){
    return node.innerHTML = html;
  };
  _.replaceHTML = function(node, html){
    return node.outerHTML = html;
  };
  _.attachHTML = function(node, html){
    return node.insertAdjacentHTML('beforeend', html);
  };
  _.createTag = function(tag){
    return function(){
      var args, res$, i$, to$, result, obj, key, val, own$ = {}.hasOwnProperty;
      res$ = [];
      for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
        res$.push(arguments[i$]);
      }
      args = res$;
      result = ['<', tag];
      if (args[0] && typeof args[0] !== 'string') {
        obj = args.shift();
        for (key in obj) if (own$.call(obj, key)) {
          val = obj[key];
          result.push(" " + key + "=\"" + val + "\"");
        }
      }
      result.push('>');
      result = result.concat(args);
      result.push("</" + tag + ">");
      return result.join('');
    };
  };
  _.parseNode = function(html){
    return document.createRange().createContextualFragment(html);
  };
  vaultStore = function(key, value){
    return localStorage.setItem(key, JSON.stringify(value));
  };
  vaultRetrieve = function(key){
    return JSON.parse(localStorage.getItem(key));
  };
  vaultRemove = function(key){
    return localStorage.removeItem(key);
  };
  vaultClear = function(){
    return localStorage.clear();
  };
  _.vault = function(key, value){
    if (arguments.length === 0) {
      return localStorage;
    }
    if (arguments.length === 1) {
      return vaultRetrieve(key);
    }
    if (arguments.length === 2) {
      return vaultStore(key, value);
    }
  };
  _.vault.store = vaultStore;
  _.vault.retrieve = vaultRetrieve;
  _.vault.set = vaultStore;
  _.vault.get = vaultRetrieve;
  _.vault.remove = vaultRemove;
  _.vault.remove = vaultRemove;
  _.vault.clear = vaultClear;
  _.vault.empty = vaultClear;
  _.times = function(f){
    return function(n){
      var i, results$ = [];
      i = 0;
      while (i++ < n) {
        results$.push(f(i));
      }
      return results$;
    };
  };
  _.repeat = function(n, f){
    var i, results$ = [];
    i = 0;
    while (i++ < n) {
      results$.push(f(i));
    }
    return results$;
  };
  _.TCO = Symbol('TCO');
  _.goto = function(){
    return [TCO].concat(arrayFrom$(arguments));
  };
  _.tco = function(res){
    for (;;) {
      if (Array.isArray(res) && res[0] === TCO) {
        res.shift();
        res = res.shift().apply(null, res);
      } else {
        return res;
      }
    }
  };
  (function(){
    var count, count2;
    count = function(n){
      if (n > 1000000) {
        return n;
      }
      return goto(count, ++n);
    };
    count2 = function(n){
      if (n > 1000000) {
        return n;
      }
      return count2(++n);
    };
    _.libraTest.countWithTCO = function(){
      return tco(count(0));
    };
    return _.libraTest.countWithoutTCO = function(){
      return count2(0);
    };
  })();
  (function(){
    var bufferBindings, flushBindings, preprocess, translate;
    _.css = function(arg){};
    _.css.preprocessors = {
      test: function(){
        return ['line 1 a', 'line 1 b'];
      }
    };
    _.css.stylesheets = {};
    _.css.bindings = {};
    _.css.remove = function(name){
      return _.css.stylesheets[name].remove();
    };
    _.css.get = function(name){
      return _.css.stylesheets[name].innerHTML;
    };
    _.css.log = function(name){
      log(_.css.stylesheets[name].innerHTML);
      return _.css.stylesheets[name].innerHTML;
    };
    _.css.disable = function(name){
      return _.css.stylesheets[name].disabled = true;
    };
    _.css.enable = function(name){
      return _.css.stylesheets[name].disabled = false;
    };
    _.css.append = function(name, code){
      return changeCSS(name, code, false);
    };
    _.css.replace = function(name, code){
      return changeCSS(name, code, false);
    };
    bufferBindings = function(bindings){
      var key, val, results$ = [];
      for (key in bindings) {
        val = bindings[key];
        results$.push(_.css.bindings[key] = val);
      }
      return results$;
    };
    flushBindings = function(){
      var cssLines, key, ref$, val, cssCode, node;
      cssLines = ['/* bindings.libra.css */', '', ':root {'];
      for (key in ref$ = _.css.bindings) {
        val = ref$[key];
        cssLines.push("    --" + key + ": " + val + ";");
      }
      cssLines.push('}');
      cssCode = cssLines.join('\n');
      if (_.css.stylesheets.bindings == null) {
        node = document.createElement('style');
        node = $('head').appendChild(node);
        _.css.stylesheets.bindings = node;
      }
      return _.css.stylesheets.bindings.innerHTML = cssCode;
    };
    _.css.bind = function(bindings){
      bufferBindings(bindings);
      return flushBindings();
    };
    _.changeCSS = function(name, code, replaceMode){
      var css, node, stylesheet;
      css = "/* " + name + ".libra.css */\n\n" + _.css.parse(code) + "\n";
      log(css);
      if (_.css.stylesheets.name == null) {
        node = document.createElement('style');
        node = $('head').appendChild(node);
        _.css.stylesheets[name] = node;
      }
      stylesheet = _.css.stylesheets[name];
      if (replaceMode) {
        stylesheet.innerHTML += css;
      } else {
        stylesheet.innerHTML = css;
      }
      return stylesheet;
    };
    _.css.parse = function(string){
      var splitmark, lines, code, chunks;
      splitmark = ' SPLITMARK ';
      string = string.replaceAll(/\r?\n[ \t]+/g, splitmark);
      log(string);
      lines = getLines(string);
      lines = lines.map(function(it){
        return it.trim();
      });
      lines = lines.map(preprocess);
      lines = lines.flat();
      lines = lines.map(translate);
      lines = lines.filter(function(it){
        return it !== '';
      });
      code = lines.join('\n');
      code = code.replaceAll(' (', ' calc(');
      code = code.replaceAll(/\$([a-zA-Z0-9-_]+)/g, 'var(--$1)');
      chunks = code.split('SELECT ');
      chunks = chunks.map(function(it){
        return it.trim();
      });
      chunks = chunks.filter(function(it){
        return it !== '';
      });
      chunks = chunks.map(function(chunk){
        var lines;
        lines = chunk.split('\n');
        lines[0] += ' {';
        lines = lines.map(function(it){
          return "    " + it;
        });
        lines[0] = lines[0].trim();
        lines.push('}');
        return lines.join('\n');
      });
      flushBindings();
      return chunks.join('\n\n').replaceAll(/[ ]+SPLITMARK[ ]?/g, '\n    ');
    };
    preprocess = function(line){
      var index, preprocFunc;
      index = line.indexOf(' ');
      if (index === -1) {
        index = line.length;
      }
      preprocFunc = css.preprocessors[line.substring(0, index)];
      if (isFunction(preprocFunc)) {
        return preprocFunc(line);
      } else {
        return [line];
      }
    };
    translate = function(line){
      var parts, index, head, tail;
      if (line === '') {
        return line;
      }
      if (line.startsWith('SELECT ')) {
        return line;
      }
      if (line.startsWith('#')) {
        line = line.replace('#', '');
        line = line.trim();
        return "/* " + line + " */";
      }
      if (in$('=', line)) {
        parts = line.split('=');
        parts = parts.map(function(it){
          return it.trim();
        });
        return "--" + parts[0] + ": " + parts[1] + ";";
      }
      index = line.indexOf(' ');
      if (index === -1) {
        return line + ':;';
      }
      head = line.substring(0, index);
      tail = line.substring(index);
      return head + ":" + tail + ";";
    };
    _.css.preprocessors.bg = function(it){
      return it.replace('bg', 'background-color');
    };
    return _.css.preprocessors['let'] = function(line){
      var regex, result, ref$;
      regex = /^let[ ]+([a-zA-Z0-9-_]+)[ ]+=[ ]+(\S.*)$/;
      result = regex.exec(line);
      if (isNull(result)) {
        throw "error: libra-css just can't with this line: " + line;
      }
      bufferBindings((ref$ = {}, ref$[result[1] + ""] = result[2], ref$));
      return '';
    };
  })();
  /*
  
  place documentation here.
  
  */
  function curry$(f, bound){
    var context,
    _curry = function(args) {
      return f.length > 1 ? function(){
        var params = args ? args.concat() : [];
        context = bound ? context || this : this;
        return params.push.apply(params, arguments) <
            f.length && arguments.length ?
          _curry.call(context, params) : f.apply(context, params);
      } : f;
    };
    return _curry();
  }
  function in$(x, xs){
    var i = -1, l = xs.length >>> 0;
    while (++i < l) if (x === xs[i]) return true;
    return false;
  }
}).call(this);