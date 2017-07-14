webpackJsonp([16],{"./node_modules/json-loader/index.js!./.cache/json/guide-modules.json":function(e,s){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/getting-started.md",childMarkdownRemark:{frontmatter:{title:"Getting started",order:0}}}},{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:20}}}},{node:{relativePath:"guide/editor-setup.md",childMarkdownRemark:{frontmatter:{title:"Editor setup",order:1}}}},{node:{relativePath:"guide/modules.md",childMarkdownRemark:{frontmatter:{title:"Modules",order:3}}}},{node:{relativePath:"guide/tools.md",childMarkdownRemark:{frontmatter:{title:"Tools",order:4}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:10}}}},{node:{relativePath:"guide/language/automatic-printer-generation.md",childMarkdownRemark:{frontmatter:{title:"Automatic Printer Generation",order:20}}}},{node:{relativePath:"guide/language/conditionals.md",childMarkdownRemark:{frontmatter:{title:"Conditionals",order:4}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring & Pattern Matching",order:5}}}},{node:{relativePath:"guide/language/data-types.md",childMarkdownRemark:{frontmatter:{title:"Built-in Data Types",order:2}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:9}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:1}}}},{node:{relativePath:"guide/language/functions.md",childMarkdownRemark:{frontmatter:{title:"Functions",order:3}}}},{node:{relativePath:"guide/language/let-bindings.md",childMarkdownRemark:{frontmatter:{title:"Let Bindings",order:2}}}},{node:{relativePath:"guide/language/more-functions.md",childMarkdownRemark:{frontmatter:{title:"More on Functions",order:6}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:10}}}},{node:{relativePath:"guide/language/more-types.md",childMarkdownRemark:{frontmatter:{title:"More on Types",order:7}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:8}}}},{node:{relativePath:"guide/language/types.md",childMarkdownRemark:{frontmatter:{title:"Types",order:1}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:5}}}},{node:{relativePath:"guide/language/primitives.md",childMarkdownRemark:{frontmatter:{title:"Primitives",order:0}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:4}}}},{node:{relativePath:"guide/javascript/syntax-cheetsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax cheetsheet",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/modules.md",childMarkdownRemark:{html:'<h3>Basics</h3>\n<p><strong>Modules are like mini files</strong>! They can contain type definitions, <code>let</code>\nbindings, nested modules, etc.</p>\n<h4>Creation</h4>\n<p>To create a module, use the <code>module</code> keyword. The module name must start with a\n<strong>capital letter</strong>. Whatever you could place in a <code>.re</code> file, you may place\ninside a module definition\'s <code>{}</code> block.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">School</span> = </span>{\n  <span class="hljs-keyword">type</span> profession = <span class="hljs-type">Teacher</span> | <span class="hljs-type">Director</span>;\n\n  <span class="hljs-keyword">let</span> person1 = <span class="hljs-type">Teacher</span>;\n  <span class="hljs-keyword">let</span> getProfession person =&gt;\n    <span class="hljs-keyword">switch</span> person {\n    | <span class="hljs-type">Teacher</span> =&gt; <span class="hljs-string">"A teacher"</span>\n    | <span class="hljs-type">Director</span> =&gt; <span class="hljs-string">"A director"</span>\n    };\n};</code></pre>\n      </div>\n<p>A module\'s contents (including types!) can be accessed much like a record\'s,\nusing the <code>.</code> notation. This demonstrates modules\' utility for namespacing.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> anotherPerson: <span class="hljs-type">School</span>.profession = <span class="hljs-type">School</span>.<span class="hljs-type">Teacher</span>;\nprint_endline (<span class="hljs-type">School</span>.getProfession anotherPerson); <span class="hljs-comment">/* "A teacher" */</span></code></pre>\n      </div>\n<p>Nested modules work too.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MyModule</span> = </span>{\n  <span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">NestedModule</span> = </span>{\n     <span class="hljs-keyword">let</span> message = <span class="hljs-string">"hello"</span>;\n  };\n};\n\n<span class="hljs-keyword">let</span> message = <span class="hljs-type">MyModule</span>.<span class="hljs-type">NestedModule</span>.message;</code></pre>\n      </div>\n<h4><code>open</code>ing a module</h4>\n<p>Constantly referring to a value/type in a module can be tedious. We can open a\nmodule\'s definition and refer to its contents without prepending them with the\nmodule\'s name. Two ways:</p>\n<p>Local open.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> message =\n  <span class="hljs-type">School</span>.(\n    <span class="hljs-keyword">switch</span> person1 {\n    | <span class="hljs-type">Teacher</span> =&gt; <span class="hljs-string">"Hello teacher!"</span>\n    | <span class="hljs-type">Director</span> =&gt; <span class="hljs-string">"Hello director!"</span>\n    }\n  );</code></pre>\n      </div>\n<p>Global open. <strong>Use this sparingly as it allows convenience at the cost of ease\nof reasoning</strong>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>open <span class="hljs-type">School</span>;\n<span class="hljs-keyword">let</span> anotherPerson: profession = <span class="hljs-type">Teacher</span>;\nprintProfession anotherPerson;</code></pre>\n      </div>\n<h4>Extending modules</h4>\n<p>Using <code>include</code> in a module statically "spreads" a module\'s content into\na new one, thus often fulfill the role of "inheritance" or "mixin".</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">BaseComponent</span> = </span>{\n  <span class="hljs-keyword">let</span> defaultGreeting = <span class="hljs-string">"Hello"</span>;\n  <span class="hljs-keyword">let</span> getAudience ::excited =&gt; excited ? <span class="hljs-string">"world!"</span> : <span class="hljs-string">"world"</span>;\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">ActualComponent</span> = </span>{\n  <span class="hljs-comment">/* the content is copied over */</span>\n  <span class="hljs-keyword">include</span> <span class="hljs-type">BaseComponent</span>;\n  <span class="hljs-comment">/* overrides BaseComponent.defaultGreeting */</span>\n  <span class="hljs-keyword">let</span> defaultGreeting = <span class="hljs-string">"Hey"</span>;\n  <span class="hljs-keyword">let</span> render () =&gt; defaultGreeting ^ <span class="hljs-string">" "</span> ^ getAudience excited::<span class="hljs-literal">true</span>;\n};</code></pre>\n      </div>\n<p><strong>Note</strong>: <code>include</code> and <code>open</code> are very different! The former literally copies\nover definitions into the new module for it to appropriate. The latter simply\nallows refering to items (values, types, constructors, etc.) in the <code>open</code>ed\nmodule\'s scope in an "unqualified" way (aka, <code>foo</code> instead of the qualified\n<code>MyModule.foo</code>).</p>\n<h4>Every <code>.re</code> file is a module</h4>\n<p>An OCaml/Reason file maps to a module; this unlocks some interesting\nexpressivity that\'d previously require code generation in other languages. The\nfile <code>react.re</code> implicitly forms a module <code>React</code>, which can be seen by other\nsource files.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* fileA.re. This typically compiles to module FileA below */</span>\n<span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span>;\n<span class="hljs-keyword">let</span> b = <span class="hljs-number">2</span>;\n\n<span class="hljs-comment">/* fileB.re */</span>\n<span class="hljs-comment">/* Maps fileA\'s implementation to a new API */</span>\n<span class="hljs-keyword">let</span> alpha = <span class="hljs-type">FileA</span>.a;\n<span class="hljs-keyword">let</span> beta = <span class="hljs-type">FileA</span>.b;</code></pre>\n      </div>\n<p>This contrived snippet expresses "copying" a file:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* fileA.re. This typically compiles to module FileA below */</span>\n<span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span>;\n<span class="hljs-keyword">let</span> b = <span class="hljs-number">2</span>;\n\n<span class="hljs-comment">/* fileB.re */</span>\n<span class="hljs-comment">/* compiles to exactly fileA.re\'s content with no runtime overhead! */</span>\n<span class="hljs-keyword">include</span> <span class="hljs-type">FileA</span>;</code></pre>\n      </div>\n<h2>Signatures</h2>\n<p>A module\'s type is called a "signature", and can be written explicitly. If a\nmodule is like a <code>.re</code> (implementation) file, then a module\'s signature is like\na <code>.rei</code> (interface) file.</p>\n<h4>Creation</h4>\n<p>To create a signature, use the <code>module type</code> keyword. The signature name must start with a\n<strong>capital letter</strong>. Whatever you could place in a <code>.rei</code> file, you may place\ninside a signature definition\'s <code>{}</code> block.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* Picking up previous section\'s example */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">type</span> <span class="hljs-title">EstablishmentType</span> = </span>{\n  <span class="hljs-keyword">type</span> profession;\n  <span class="hljs-keyword">let</span> getProfession: profession =&gt; string;\n};</code></pre>\n      </div>\n<p>A signature defines the list of requirements that a module must satisfy in order\nfor that module to match the signature. Those requirements are of the form:</p>\n<ul>\n<li>\n<p><code>let x: int;</code> requires a <code>let</code> binding named <code>x</code>, of type <code>int</code>.</p>\n</li>\n<li>\n<p><code>type t = someType;</code> requires a type field <code>t</code> to be equal to <code>someType</code>.</p>\n</li>\n<li>\n<p><code>type t;</code> requires a type field <code>t</code>, but without imposing any requirements on\nthe actual, concrete type of <code>t</code>. We\'d use <code>t</code> in other entries in the\nsignature to describe relationships, e.g. <code>let makePair: t -> (t, t)</code> but we\ncannot, for example, assume that <code>t</code> is an <code>int</code>. This gives us great,\nenforced abstraction abilities.</p>\n</li>\n</ul>\n<p>To illustrate the various kinds of type entries, consider the above signature\n<code>EstablishmentType</code> which requires that a module:</p>\n<ul>\n<li>Declare a type named <code>profession</code>.</li>\n<li>Must include a function that takes in a value of the type <code>profession</code> and\nreturns a string.</li>\n</ul>\n<p><strong>Note</strong>:</p>\n<p>Modules of the type <code>EstablishmentType</code> can contain more fields than the\nsignature declares, just like the module <code>School</code> in the previous section (if we\nchoose to assign it the type <code>EstablishmentType</code>. Otherwise, <code>School</code> exposes\nevery field). This effectively makes the <code>person1</code> field an enforced\nimplementation detail! Outsiders can\'t access it, since it\'s not present in the\nsignature; the signature <strong>constrained</strong> what others can access.</p>\n<p>The type <code>EstablishmentType.profession</code> is <strong>abstract</strong>: it doesn\'t have a\nconcrete type; it\'s saying "I don\'t care what the actual type is, but it\'s used\nas input to <code>getProfession</code>". This is useful to fit many modules under the same\ninterface:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">Company</span>: <span class="hljs-title">EstablishmentType</span> = </span>{\n  <span class="hljs-keyword">type</span> profession = <span class="hljs-type">CEO</span> | <span class="hljs-type">Designer</span> | <span class="hljs-type">Engineer</span> | ...;\n\n  <span class="hljs-keyword">let</span> getProfession person =&gt; ...\n  <span class="hljs-keyword">let</span> person1 = ...;\n  <span class="hljs-keyword">let</span> person2 = ...;\n};</code></pre>\n      </div>\n<p>It\'s also useful to hide the underlying type as an implementation detail others\ncan\'t rely on. If you ask what the type of <code>Company.profession</code> is, instead of\nexposing the variant, it\'ll only tell you "it\'s <code>Company.profession</code>".</p>\n<h4>Every <code>.rei</code> file is a signature</h4>\n<p>Similar to how a <code>react.re</code> file implicitly defines a module <code>React</code>, a file\n<code>react.rei</code> implicitly defines a signature for <code>React</code>. If <code>react.rei</code> isn\'t\nprovided, the signature of <code>react.re</code> defaults to exposing all the fields of the\nmodule. Because they don\'t contain implementation files, <code>.rei</code> files are used\nin the ecosystem to also document the public API of their corresponding modules.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* file react.re (implementation. Compiles to module React) */</span>\n<span class="hljs-keyword">type</span> state = int;\n<span class="hljs-keyword">let</span> render = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> str<span class="hljs-params"> </span></span></span>=&gt; str;</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* file react.rei (interface. Compiles to signature of module React) */</span>\n<span class="hljs-keyword">type</span> state = int;\n<span class="hljs-keyword">let</span> render: str =&gt; str;</code></pre>\n      </div>\n<h2>Module Functions (functors)</h2>\n<p>Modules can be passed to functions! It would be the equivalent of passing a file\nas a first-class item. However, modules are at a different "layer" of the\nlanguage than other common concepts, so we can\'t pass them to <em>regular</em>\nfunctions. Instead, we pass them to special functions called "functors".</p>\n<p>The syntax for defining and using functors is very much like the syntax\nfor defining and using regular functions. The primary differences are:</p>\n<ul>\n<li>Functors use the <code>module</code> keyword instead of <code>let</code> and the <code>fun</code>\nkeyword designates "functor" rather than "function" in this case.</li>\n<li>Functors take modules as arguments and return a module.</li>\n<li>Functors <em>require</em> annotating arguments.</li>\n<li>Functors must start with a capital letter (just like modules/signatures).</li>\n</ul>\n<p>Here\'s an example <code>MakeSet</code> functor, that takes in a module of the type\n<code>Comparable</code> and returns a new set that can contain such comparable items.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">type</span> <span class="hljs-title">Comparable</span> = </span>{\n  <span class="hljs-keyword">type</span> t;\n  <span class="hljs-keyword">let</span> <span class="hljs-built_in">equal</span>: t =&gt; t =&gt; bool;\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MakeSet</span> = <span class="hljs-title">fun</span> (<span class="hljs-title">Item</span>: <span class="hljs-title">Comparable</span>) =&gt; </span>{\n  <span class="hljs-comment">/* let\'s use a list as our naive backing data structure */</span>\n  <span class="hljs-keyword">type</span> backingType = list <span class="hljs-type">Item</span>.t;\n  <span class="hljs-keyword">let</span> empty = [];\n  <span class="hljs-keyword">let</span> add (currentSet: backingType) (newItem: <span class="hljs-type">Item</span>.t) :backingType =&gt;\n    <span class="hljs-comment">/* if item exists */</span>\n    <span class="hljs-keyword">if</span> (<span class="hljs-type">List</span>.exists (<span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-type">Item</span>.<span class="hljs-built_in">equal</span> x newItem) currentSet) {\n      currentSet <span class="hljs-comment">/* return the same (immutable) set (a list really) */</span>\n    } <span class="hljs-keyword">else</span> {\n      [newItem, ...currentSet]; <span class="hljs-comment">/* prepend to the set and return it */</span>\n    }\n};</code></pre>\n      </div>\n<p>Functors can be applied using function application syntax. In this case, we\'re\ncreating a set, whose items are pairs of integers.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">IntPair</span> = </span>{\n  <span class="hljs-keyword">type</span> t = (int, int);\n  <span class="hljs-keyword">let</span> <span class="hljs-built_in">equal</span> (x1, y1) (x2, y2) =&gt; x1 == x2 &amp;&amp; y1 == y2;\n  <span class="hljs-keyword">let</span> create x y =&gt; (x, y);\n};\n\n<span class="hljs-comment">/* IntPair abides by the Comparable signature required by MakeSet */</span>\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">SetOfIntPairs</span> = <span class="hljs-title">MakeSet</span> <span class="hljs-title">IntPair</span>;</span></code></pre>\n      </div>\n<h4>Module functions types</h4>\n<p>Like with module types, functor types also act to constrain and hide what we may\nassume about functors. The syntax for functor types are consistent with those\nfor function types, but with types capitalized to represent the signatures of\nmodules the functor accepts as arguments and return values. In the\nprevious example, we\'re exposing the backing type of a set; by giving <code>MakeSet</code>\na functor signature, we can hide the underlying data structure!</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">type</span> <span class="hljs-title">Comparable</span> = ...\n\n<span class="hljs-title">module</span> <span class="hljs-title">type</span> <span class="hljs-title">MakeSetType</span> = (<span class="hljs-title">Item</span>: <span class="hljs-title">Comparable</span>) =&gt; </span>{\n  <span class="hljs-keyword">type</span> backingType;\n  <span class="hljs-keyword">let</span> empty: backingType;\n  <span class="hljs-keyword">let</span> add: backingType =&gt; <span class="hljs-type">Item</span>.t =&gt; backingType;\n};\n\n<span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">MakeSet</span>: <span class="hljs-title">MakeSetType</span> = <span class="hljs-title">fun</span> (<span class="hljs-title">Item</span>: <span class="hljs-title">Comparable</span>) =&gt; </span>{\n  ...\n};</code></pre>\n      </div>\n<h2>Drawbacks</h2>\n<p>Modules and functors are at a different "layer" of language than the rest (\nfunctions, let bindings, data structures, etc.). For example, you can\'t easily\npass them into a tuple or record. Use them judiciously! Lots of times, just a\nrecord or a function is enough.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-class"><span class="hljs-keyword">module</span> <span class="hljs-title">School</span> = </span>{...};\n\n<span class="hljs-comment">/* this will straight up give you a syntax error! */</span>\n<span class="hljs-keyword">let</span> schools = (<span class="hljs-type">School</span>, <span class="hljs-type">School</span>);</code></pre>\n      </div>',frontmatter:{title:"Modules"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/modules.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-modules-05854531bd1ed62eb2fd.js.map