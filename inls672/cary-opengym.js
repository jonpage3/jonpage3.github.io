
let findButton = document.querySelector('#findGyms');
findButton.addEventListener('click', getGyms);

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
        selectOptions.innerHTML = activityOptions;
      } catch (error) {
        console.log(error);
      }
}

function getGyms() {
    document.querySelector('#details').innerHTML = "";

    let gymList = '<ul>';

    obj.forEach(gym => {
        if (gym.open_gym == activity.value) {
            let gymData = `<li class="gymname" onclick="showDetails('${gym.facility_title}','${gym.location}','${gym.address11}','${gym.postal_code1}')">${gym.facility_title}</li>`;
            gymList += gymData;
        }
    });

    gymList += '</ul>';

    let selectedGyms = document.querySelector('#gymlist');
    selectedGyms.innerHTML = gymList;
}

function showDetails(facility_title, location, address, postal) {
     details = `<h4>${facility_title}</a></h4>
                <p class="desc">${location}</p>
                <p class="desc">${address}</p>
                <p class="desc">${postal}</p>;`
     document.querySelector('#details').innerHTML = details;
}

