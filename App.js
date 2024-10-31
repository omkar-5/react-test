/*
<div id="parent">
    <div id = "child">
        <h1 id="head">I am h1 tag</h1>
    </div>
</div>
*/

const heading = React.createElement("h1",{id:"heading", abc:"xyz"},"Hello from react");
//console.log(heading);
            const root = ReactDOM.createRoot(document.getElementById("root"));
            const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{id:"head"},"I am h1 tag")))
            //console.log(root);
           // root.render(parent);


            /*
<div id="parent">
    <div id = "child">
        <h1 id="head">I am h1 tag</h1>
        <h2 id="head2">I am h2 tag</h2>
    </div>
</div>
*/


            const parent2 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"head"},"I am h1 tag"),React.createElement("h2",{id:"head2"},"I am h2 tag")]))
            //console.log(root);
            //root.render(parent2);

             /*
<div id="parent">
    <div id = "child">
        <h1 id="head">I am h1 tag</h1>
        <h2 id="head2">I am h2 tag</h2>
    </div>
    <div id = "child2">
        <h1 id="head">I am h1 tag</h1>
        <h2 id="head2">I am h2 tag</h2>
    </div>
</div>
*/


const parent3 = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{id:"head"},"I am h1 tag"),React.createElement("h2",{id:"head2"},"I am h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{id:"head"},"I am h1 tag"),React.createElement("h2",{id:"head2"},"I am h2 tag")])])
            //console.log(root);
            root.render(parent3);
            