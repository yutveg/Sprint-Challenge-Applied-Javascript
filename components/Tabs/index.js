// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const entryTopics = document.querySelector('.topics');

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        response.data.topics.forEach(item => {
            let tempVal = document.createElement('div');
            tempVal.classList.add('tab');
            tempVal.textContent=item;
            entryTopics.appendChild(tempVal);
        })
    })
    .catch(error => {
        console.log(error);
    })