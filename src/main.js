import "./style.css";

document.querySelector("#app").innerHTML = `


  this must be green because it has .child:nth-child(2)
  <div class="parent-bug">
    <div class="child p-10">child 1</div>
    <div class="child p-10">child 2</div>
  </div>


  this should NOT be green, but it is... because :has(.child:nth-child(2)) is renderd to :has(.child):nth-child(2) incorrectly.
  <div class="parent-bug">
    <div class="child p-10">child 1</div>
  </div>


  This should be yellow but it's not, because :has(:nth-child(2)) is rendered to :has():nth-child(2) incorrectly.
  <div class="empty-has-bug">
  <div class="p-10">child 1</div>
  <div class="p-10">child 2</div>
  </div>


  This should be blue but it's not, because :not(:nth-child(1)) is rendered to :not() incorrectly.
  <div>
    <div class="p-10 empty-has-bug">child 1</div>
  </div>
`;
