/**
 * Get state data from the data object array
 *
 * @param {Array} data | Object array which contain state data
 * @returns {Object} |  stateData;
 */
export function getFindStatefromData(data, stateName) {
  //console.log(data);
  let stateData =
    data &&
    data.find(
      (eachState) =>
        String(eachState.state).toLowerCase() ===
        String(stateName).toLowerCase()
    );
  return stateData;
}

function getPercentage(value, total) {
  let percentage = "";
  if (value && !isNaN(value) && total && !isNaN(total)) {
    percentage = Math.round((value / total) * 100) + "%";
  }

  return percentage;
}

export function getActiveTotal(data) {
  /* return Array.isArray(data)
    ? data.reduce((a, b) => {
        return a + (b.total || 0);
      }, 0)
    : 0; */

  let total = 0;
  let totalActive = 0;
  let totalDeaths = 0;
  let totalRecoveries = 0;
  if (data && Array.isArray(data)) {
    data.forEach((state) => {
      totalActive += state.active;
      totalDeaths += state.deaths;
      totalRecoveries += state.recoveries;
      total += state.total;
    });
  }

  return {
    total,
    active: totalActive,
    deaths: totalDeaths,
    recoveries: totalRecoveries,
    percentage: {
      active: getPercentage(totalActive, total),
      deaths: getPercentage(totalDeaths, total),
      recoveries: getPercentage(totalRecoveries, total)
    }
  };
}
