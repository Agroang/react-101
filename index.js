// the first parameter is what I want to display and second is where (we can use a queryselector as well)
ReactDOM.render(<h1>This is react baby!</h1>, document.getElementById("root"))

// you can add a bunch of html as well, not just 1 element:
ReactDOM.render(
  <ul><li>1</li><li>2</li></ul>,
  document.getElementById("ul-testing")
)

// More example on how to create a components and how to render it
// Note that is not "class" but "className" as this is JSX so it looks a little bit different
function MainContent() {
  return (
    <h1 className="btn btn-primary">Nice fat h1 with bootstrap</h1>
  )
}

ReactDOM.render(
  <div>
    <MainContent />
  </div>,
  document.getElementById("root")
)

// Challenge - recreate the above line of code in vanilla JS by creating and
// appending an h1 to our div#root(without using innerHTML).

// - Create a new h1 element
// - Give it some textContent
// - Give it a class name of "header"
// - append it as a child of the div#root

const h1 = document.createElement("h1");
h1.textContent = 'This is a header'
h1.classList.add('header')
// another simpler way could be: h1.className = 'header'
const target = document.getElementById('root')
target.appendChild(h1)
// last step could also be done in 1 line: document.getElementbyId('root').appendChild(h1)

// const element = <h1 className="header">This is JSX</h1>
// console.log(element)
// ReactDOM.render(element, document.getElementById("root"))
// The element that JSX creates is actually a JS object, and inside the props (properties) we
// can see className (class) and the children (actual content, a piece of string for example)

// You can also only render 1 parent element, so <h1></h1><p></p> won't work, but you can make
// it work by having only 1 parent element, so wrap those two inside a div and as you will have
// only 1 div (parent element) you won't have problems

ReactDOM.render(
  <div>
    <h5>h5 here inside a div</h5>
    <h6> h6 here inside same div</h6>
  </div>,
  document.getElementById("parent-unique")
)

// If you have too many html elements that you want to add you can also save those in a variable
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// )
// ReactDOM.render(
//   page,
//   document.getElementById("root")
// )


// Another example:
// const navbar = (
//   <nav>
//     <h1>My Website</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// )

// ReactDOM.render(
//   navbar,
//   document.getElementById('root')
// )

// The job of ReactDOM.render is to take react element (js objects) and make those
// into real dom elements

// Normally, instead of the CDNs that we have in the index, we would use actual dependencies in our package.son
// If that is the case, the we would need to import the modules as bellow:
// import React from "react"
// import ReactDOM from "react-dom"

// A basic use of React:
// const target = document.getElementById("root")
// const page = (
//   <div>
//     <img src="./react-logo.png" width="40px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars in Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// )

// ReactDOM.render(page, target)
