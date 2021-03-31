
let findButton = document.querySelector('#findGyms');
findButton.addEventListener('click', getParks);

var obj;

loadData();

async function loadData() {
    let url = ' https://data.townofcary.org/api/v2/catalog/datasets/open-gym/exports/json ';
    try {
        let response = await fetch(url);
        obj = await response.json();
        console.log(obj);

        let activitySet = new Set();
        obj.forEach(gym => {
            activitySet.add(gym.open_gym);
        });


        activityList = Array.from(activitySet).sort();
        let activityOptions = '';

        activityList.forEach(activity => {
          let option = `<option>${activity}</option>`;
          activityOptions += option;
        });

        let selectOptions = document.querySelector('#activity');
        selectOptions.innerHTML = featureOptions;
      } catch (error) {
        console.log(error);
      }
}

