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
