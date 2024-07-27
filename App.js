
const parent = React.createElement(
    "div", 
    {id : "parent"},
    [React.createElement("div", {id : "child"},
        [
            React.createElement("h1", {}, "I am h1 tage"), 
            React.createElement("h2", {}, "I am in h2 tag")
        ]
    ),
    React.createElement("div", {id : "child2"},
        [
            React.createElement("h1", {}, "I am h1 tage"), 
            React.createElement("h2", {}, "I am in h2 tag")
        ]
    )]
);






// const heading = React.createElement(
//     "h1",
//      {id : "heading"}, 
//      "Hello World from React!");

     console.log(parent);
    
    const root = ReactDOM.createRoot(document.getElementById("header"));  //this root is a place where all react code will learn

    root.render(parent);