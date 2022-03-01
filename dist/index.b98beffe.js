function e(e){return e&&e.__esModule?e.default:e}var d;d=JSON.parse('[{"sideA":"Greek Word","name":"Greek","cards":[{"sideA":"γεια σας","sideB":"Hello"},{"sideA":"αντιο σας","sideB":"Goodbye"},{"sideA":"πατέρας","sideB":"Father"},{"sideA":"μητέρα","sideB":"Mother"}],"sideB":"English Translation"},{"sideA":"Quote","name":"Quotes","cards":[{"sideA":"Where is fancy bred? In the heart or in the road?","sideB":"Willy Wonka"},{"sideA":"If the Good Lord had intended us to walk he wouldn\'t have inveted roller skates","sideB":"Willy Wonka"}],"sideB":"Author"},{"sideA":"Russian Word","name":"Russian","cards":[{"sideA":"отец","sideB":"Father"},{"sideA":"папа","sideB":"Dad"},{"sideA":"мать","sideB":"Mother"},{"sideA":"Мама","sideB":"Mom"}],"sideB":"English Translation"},{"sideA":"Word","name":"Vocabulary","cards":[{"sideA":"Idyll","sideB":"A short poem or prose piece depicting a rural or pastoral scene, usually in idealized terms"},{"sideA":"Amorous","sideB":"Full of or strongly disposed to romantic love"},{"sideA":"Dowager","sideB":"(1) A widow who holds a title or property derived from her deceased husband (2) an elderly woman of high social station"},{"sideA":"Phalanx","sideB":"A compact or close-knit body of people"},{"sideA":"Apropos","sideB":"Fitting and to the point"},{"sideA":"Charabanc","sideB":"A bus typically used for sightseeing, originally open and pulled by horses"},{"sideA":"Dacha","sideB":"A Russian country house or villa"},{"sideA":"Pallor","sideB":"Unnatural lack of color in the skin"},{"sideA":"Monomania","sideB":"Single-minded insanity or mania"},{"sideA":"Guffaw","sideB":"Burst of deep, loud, hearty laughter"},{"sideA":"Samovar","sideB":"Russian, metal urn used for tea-making"},{"sideA":"Diffident","sideB":"Showing modest reserve"},{"sideA":"Corpulence","sideB":"Excessive fatness shown"},{"sideA":"Mawkish","sideB":"Insecurely emotional"},{"sideA":"Dissembler","sideB":"One who conceals their true opinions under a false appearance"},{"sideA":"Castigate","sideB":"Punish, correct"},{"sideA":"Punctilious","sideB":"Attentive to etiquette and good social behavior"},{"sideA":"Pecuniary","sideB":"Related to money"},{"sideA":"Reproof","sideB":"Act of criticism"},{"sideA":"Fatuity","sideB":"Ludicrous folly"},{"sideA":"Genial","sideB":"Agreeable, comfortable"},{"sideA":"Peremptory","sideB":"Final, decisive act"},{"sideA":"Paroxysm","sideB":"Uncontrollable, sudden attack"},{"sideA":"Vivisect","sideB":"Cut open a still-alive body"},{"sideA":"Incongruous","sideB":"Inappropriate or incompatible"},{"sideA":"Pettifogging","sideB":"Debating over petty issues"},{"sideA":"Milksop","sideB":"Timid, unassertive or weak man or boy"},{"sideA":"Harangue","sideB":"An exclamation, bombastic, emotional and with force"},{"sideA":"Impunity","sideB":"Without punishment"},{"sideA":"Calumny","sideB":"Personal attack on character"},{"sideA":"Expiate","sideB":"Make amends for"},{"sideA":"Obsequious","sideB":"Attempting to win favor by flattery"},{"sideA":"Declaim","sideB":"Recite in public with rhetorical flare"},{"sideA":"Gourmand","sideB":"Glutton"},{"sideA":"Fogey","sideB":"One out-of-fashion"},{"sideA":"Nosegay","sideB":"Arrangement of flowers"},{"sideA":"Lachrymary","sideB":"Containing or intending to contain tears"},{"sideA":"Privation","sideB":"Extreme poverty"},{"sideA":"Churl","sideB":"Person lacking culture or refinement"},{"sideA":"Gait","sideB":"Rate of moving"},{"sideA":"Conflagration","sideB":"Uncontrollable, large fire"}],"sideB":"Definition"}]');const i=({deck:i,side:s,card:a,mode:t})=>{const[{cards:n}]=e(d).filter((({name:e})=>e===i)),o=n[a],c="a"===s?o.sideA:o.sideB,r="a"===s?"b":"a",l=0==a?n.length-1:a-1,m=a==n.length-1?0:a+1,u=document.getElementById("content"),p=document.createElement("div");p.className="row",u.appendChild(p);const h=document.createElement("div");h.className="col s12 m12",p.appendChild(h);const A=document.createElement("div");A.className="card large",h.appendChild(A);const f=document.createElement("div");f.className="card-content",A.appendChild(f);const B=document.createElement("div");B.className="card-action",A.appendChild(B);const g=document.createElement("span");g.className="card-title",g.appendChild(document.createTextNode(c)),f.appendChild(g);const y=document.createElement("a");y.href="shuffled"===t?`/?deck=${i}&side=${r}&card=${a}&mode=shuffled`:`/?deck=${i}&side=${r}&card=${a}`,y.appendChild(document.createTextNode("Flip"));const C=document.createElement("a");C.href=`/?deck=${i}&side=a&card=${l}`,"shuffled"!==t&&C.appendChild(document.createTextNode("Previous"));const k=document.createElement("a");k.href="shuffled"===t?`/?deck=${i}&mode=shuffled`:`/?deck=${i}&side=a&card=${m}`,k.appendChild(document.createTextNode("Next")),B.appendChild(C),B.appendChild(y),B.appendChild(k)};window.addEventListener("DOMContentLoaded",(s=>{const a=(window.location.href.split("?")[1]||"").split("&").map((e=>e.split("="))).reduce(((e,[d,i])=>(e[d]=i,e)),{});"deck"in a&&"side"in a&&"card"in a?i({deck:a.deck,side:a.side,card:parseInt(a.card),mode:a.mode}):"mode"in a&&"shuffled"===a.mode?(({deck:s})=>{const[{cards:a}]=e(d).filter((({name:e})=>e===s));i({deck:s,side:"a",card:Math.floor(Math.random()*a.length),mode:"shuffled"})})({deck:a.deck}):(()=>{const i=document.getElementById("content"),s=document.createElement("div");s.className="row",i.appendChild(s),e(d).forEach((e=>{const d=document.createElement("div");d.className="col s12 m3",s.appendChild(d);const i=document.createElement("div");i.className="card",d.appendChild(i);const a=document.createElement("div");a.className="card-content",i.appendChild(a);const t=document.createElement("div");t.className="card-action",i.appendChild(t);const n=document.createElement("span");n.className="card-title",n.appendChild(document.createTextNode(e.name)),a.appendChild(n);const o=document.createElement("p");o.appendChild(document.createTextNode(`Side A: ${e.sideA}, Side B: ${e.sideB}`)),a.appendChild(o);const c=document.createElement("a");c.href=`/?deck=${e.name}&side=a&card=0`,t.appendChild(c),c.appendChild(document.createTextNode("Open Deck"));const r=document.createElement("a");r.href=`/?deck=${e.name}&mode=shuffled`,t.appendChild(r),r.appendChild(document.createTextNode("Open Shuffled Deck"))}))})()}));
//# sourceMappingURL=index.b98beffe.js.map
