
export const apiURL = "http://localhost:34567";
const _postApi = (url, data = {}, success = (f) => f, error = (f) => f) => {
  // const { facilityId, username } = store.getState().auth.user;
  // data.facilityId = facilityId;
  // data.userId = username;
  fetch(`${apiURL}${url}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then((raw) => raw.json())
    .then((response) => {
      // console.log(response);
      if (response.status >= 400) {
        error(response);
      } else success(response);
    })
    .catch((err) => error(err));
};

const _fetchApi = (url, success = (f) => f, error = (f) => f) => {
  fetch(`${apiURL}${url}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((raw) => raw.json())
    .then((response) => {
      // console.log(response);
      if (response.status >= 400) {
        error(response);
      } else success(response);
    })
    .catch((err) => error(err));
};

const _fetchExtApi = (url, success = (f) => f, error = (f) => f) => {
  fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  })
    .then((raw) => raw.json())
    .then((response) => {
      if (response.status >= 400) {
        error(response);
      } else success(response);
    })
    .catch((err) => error(err));
};

export const capitalizeAllFirstLetter = (str) => {
  // converting first letter to uppercase
  return typeof str === 'string' ? str.length>0 && str.replace(/^./, str[0].toUpperCase()) : '';
}
export const capitalizeFirstLetter = (str) => {
  // converting first letter to uppercase
  return typeof str === 'string' ? str.replace(str[0].toUpperCase()) : '';
}

export const hasRole = (user, role) =>
  role.some((role) => user.role.includes(role));

export { _fetchApi, _postApi, _fetchExtApi };
export function unflatten(arr) {
  var tree = [],
    mappedArr = {},
    arrElem,
    mappedElem;

  // First map the nodes of the array to an object -> create a hash table.
  for (var i = 0, len = arr.length; i < len; i++) {
    arrElem = arr[i];
    mappedArr[arrElem.id] = arrElem;
    mappedArr[arrElem.id]["children"] = [];
  }

  for (var id in mappedArr) {
    // console.log(id, mappedArr)
    if (mappedArr.hasOwnProperty(id)) {
      mappedElem = mappedArr[id];
      // If the element is not at the root level, add it to its parent array of children.
      if (mappedElem.group_id) {
        mappedArr[mappedElem["group_id"]]["children"].push(mappedElem);
      }
      // If the element is at the root level, add it to first level elements array.
      else {
        tree.push(mappedElem);
      }
    }
  }
  return tree;
}

export function useQuery() {
const { useLocation } = require("react-router");
  return new URLSearchParams(useLocation().search);
}
export default useQuery;
