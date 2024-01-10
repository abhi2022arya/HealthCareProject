import "./Complaintform.css";
import Dropdown from "../Components/Dropdown";
import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import { userInfoContext } from "../GlobalState";

function Complaintform() {
  const { globalFirstName, globalLastName, globalEmail } =
    useContext(userInfoContext);
  const [selectedHeadSites, setSelectedHeadSites] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  function handleHeadSitesCheckbox(value, parent1, parent2, parent3, parent4) {
    const updatedSites = [...selectedHeadSites];
    const selectedValue = `${value}|${parent1 || "NULL"}|${parent2 || "NULL"}|${
      parent3 || "NULL"
    }|${parent4 || "NULL"}`;

    if (updatedSites.includes(selectedValue)) {
      updatedSites.splice(updatedSites.indexOf(selectedValue), 1);
    } else {
      updatedSites.push(selectedValue);
    }

    setSelectedHeadSites(updatedSites);
  }

  let button_name = "Submit";

  function handleSubmit() {
    // Assuming you have a backend API endpoint to receive the data
    const backendUrl = "/complaintform"; // Replace with your actual backend URL

    // Prepare the data to send to the backend
    const dataToSend = {
      selectedHeadSites: selectedHeadSites,
      first_name: globalFirstName,
      last_name: globalLastName,
      email: globalEmail,
    };

    // Configure the fetch request
    fetch(backendUrl, {
      method: "POST", // Use the POST method
      headers: {
        "Content-Type": "application/json", // Specify the content type as JSON
      },
      body: JSON.stringify(dataToSend), // Convert data to JSON format
    })
      .then((response) => {
        // Check if the response status indicates success (e.g., 200 OK)
        if (response.ok) {
          return response.json(); // Parse the response JSON if available
        } else {
          throw new Error("Failed to send data to the backend");
        }
      })
      .then((data) => {
        // Handle the response data if needed
        console.log("Data sent successfully:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error sending data to the backend:", error);
      });   
  }

 
 

  return (
    <div>
      <Header />
      <form>
      
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="sites-involved">
              <h2>Sites Involved</h2>

              <div className="head">
                <h3>Head</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="face"
                    name="head"
                    value="face"
                    checked={selectedHeadSites.includes(
                      "face|head|sites-involved|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "face",
                        "head",
                        "sites-involved",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="face">Face</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="eyes"
                    name="head"
                    value="eyes"
                    checked={selectedHeadSites.includes(
                      "eyes|head|sites-involved|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "eyes",
                        "head",
                        "sites-involved",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="eyes">Eyes</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="nose"
                    name="head"
                    value="nose"
                    checked={selectedHeadSites.includes(
                      "nose|head|sites-involved|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "nose",
                        "head",
                        "sites-involved",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="nose">Nose</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="ear"
                    name="head"
                    value="ear"
                    checked={selectedHeadSites.includes(
                      "ear|head|sites-involved|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "ear",
                        "head",
                        "sites-involved",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="ear">Ear</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="lips"
                    name="head"
                    value="lips"
                    checked={selectedHeadSites.includes(
                      "lips|head|sites-involved|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "lips",
                        "head",
                        "sites-involved",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="lips">Lips</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="mouthcavity"
                    name="head"
                    value="mouthcavity"
                    checked={selectedHeadSites.includes(
                      "mouthcavity|head|sites-involved|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "mouthcavity",
                        "head",
                        "sites-involved",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="mouthcavity">Mouth Cavity</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="scalp"
                    name="head"
                    value="scalp"
                    checked={selectedHeadSites.includes(
                      "scalp|head|sites-involved|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "scalp",
                        "head",
                        "sites-involved",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="scalp">Scalp</label>
                </div>
                <div className="sub-3" name="head" value="neck">
                  <p>Neck</p>
                </div>
                <div className="sub-4">
                  <input
                    type="checkbox"
                    id="neck_anterior"
                    name="neck"
                    value="anterior"
                    checked={selectedHeadSites.includes(
                      "anterior|neck|head|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "anterior",
                        "neck",
                        "head",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="neck_anterior">Anterior</label>
                </div>
                <div className="sub-4">
                  <input
                    type="checkbox"
                    id="neck_posterior"
                    name="neck"
                    value="posterior"
                    checked={selectedHeadSites.includes(
                      "posterior|neck|head|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "posterior",
                        "neck",
                        "head",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="neck_posterior">Posterior</label>
                </div>
              </div>

              <div className="trunk">
                <h3>Trunk</h3>
                <div className="sub-3" data-value="chest">
                  <p>Chest</p>
                </div>

                <div className="sub-5">
                  <input
                    type="checkbox"
                    id="chest"
                    name="chest"
                    value="chest"
                    checked={selectedHeadSites.includes(
                      "chest|chest|trunk|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "chest",
                        "chest",
                        "trunk",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="chest">Chest</label>
                </div>

                <div className="sub-5">
                  <input
                    type="checkbox"
                    id="onbreast"
                    name="chest"
                    value="onbreast"
                    checked={selectedHeadSites.includes(
                      "onbreast|chest|trunk|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "onbreast",
                        "chest",
                        "trunk",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="onbreast">On Breast</label>
                </div>

                <div className="sub-5">
                  <input
                    type="checkbox"
                    id="onfold"
                    name="chest"
                    value="onfold"
                    checked={selectedHeadSites.includes(
                      "onfold|chest|trunk|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "onfold",
                        "chest",
                        "trunk",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="onfold">On Fold</label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="abdomen"
                    name="trunk"
                    value="abdomen"
                    checked={selectedHeadSites.includes(
                      "abdomen|trunk|NULL|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "abdomen",
                        "trunk",
                        "NULL",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="abdomen">Abdomen</label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="umbilicus"
                    name="trunk"
                    value="umbilicus"
                    checked={selectedHeadSites.includes(
                      "umbilicus|trunk|NULL|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "umbilicus",
                        "trunk",
                        "NULL",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="umbilicus">Umbilicus</label>
                </div>
              </div>

              <div className="extremities">
                <h3>Extremities</h3>
                <div className="sub-3" name="extremities" data-value="flexors">
                  <p>Flexors</p>
                </div>
                <div className="sub-4" name="flexors" value="axilla">
                  <p>Axilla</p>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="axilla"
                      value="right"
                      checked={selectedHeadSites.includes(
                        "right|axilla|flexors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "right",
                          "axilla",
                          "flexors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Right
                  </label>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="axilla"
                      value="left"
                      checked={selectedHeadSites.includes(
                        "left|axilla|flexors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "left",
                          "axilla",
                          "flexors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Left
                  </label>
                </div>
                <div className="sub-4" name="flexors" value="groin">
                  <p>Groin</p>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="groin"
                      value="right"
                      checked={selectedHeadSites.includes(
                        "right|groin|flexors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "right",
                          "groin",
                          "flexors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Right
                  </label>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="groin"
                      value="left"
                      checked={selectedHeadSites.includes(
                        "left|groin|flexors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "left",
                          "groin",
                          "flexors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Left
                  </label>
                </div>
                <div className="sub-3" name="extremities" value="extensors">
                  <p>Extensors</p>
                </div>
                <div className="sub-4" name="extensors" value="hand">
                  <p>Hand</p>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="hand"
                      value="right"
                      checked={selectedHeadSites.includes(
                        "right|hand|extensors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "right",
                          "hand",
                          "extensors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Right
                  </label>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="hand"
                      value="left"
                      checked={selectedHeadSites.includes(
                        "left|hand|extensors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "left",
                          "hand",
                          "extensors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Left
                  </label>
                </div>
                <div className="sub-4" name="extensors" value="leg">
                  <p>Leg</p>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="leg"
                      value="right"
                      checked={selectedHeadSites.includes(
                        "right|leg|extensors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "right",
                          "leg",
                          "extensors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Right
                  </label>
                </div>
                <div className="sub-5">
                  <label>
                    <input
                      type="radio"
                      name="leg"
                      value="left"
                      checked={selectedHeadSites.includes(
                        "left|leg|extensors|extremities|sites-involved"
                      )}
                      onChange={() =>
                        handleHeadSitesCheckbox(
                          "left",
                          "leg",
                          "extensors",
                          "extremities",
                          "sites-involved"
                        )
                      }
                    />
                    Left
                  </label>
                </div>
              </div>

              <div className="genitalia">
                <h3>Genitalia</h3>

                <div className="sub-4" name="genitalia" value="anterior">
                  <p>Anterior</p>
                </div>
                <div className="sub-5">
                  <input
                    id="penileregion"
                    type="checkbox"
                    name="anterior"
                    value="penileregion"
                    checked={selectedHeadSites.includes(
                      "penileregion|anterior|genitalia|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "penileregion",
                        "anterior",
                        "genitalia",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="penileregion">Penile region</label>
                </div>
                <div className="sub-5">
                  <input
                    id="scrotalregion"
                    type="checkbox"
                    name="anterior"
                    value="scrotalregion"
                    checked={selectedHeadSites.includes(
                      "scrotalregion|anterior|genitalia|sites-involved"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "scrotalregion",
                        "anterior",
                        "genitalia",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="scrotalregion">Scrotal region</label>
                </div>
                <div className="sub-5">
                  <input
                    id="vaginalregion"
                    type="checkbox"
                    name="anterior"
                    value="vaginalregion"
                    checked={selectedHeadSites.includes(
                      "vaginalregion|anterior|genitalia|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "vaginalregion",
                        "anterior",
                        "genitalia",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="vaginalregion">Vaginal region</label>
                </div>
                <div className="sub-5">
                  <input
                    id="perivaginalregion"
                    type="checkbox"
                    name="anterior"
                    value="perivaginalregion"
                    checked={selectedHeadSites.includes(
                      "perivaginalregion|anterior|genitalia|sites-involved"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "perivaginalregion",
                        "anterior",
                        "genitalia",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="perivaginalregion">Perivaginal region</label>
                </div>
                <div className="sub-4" name="genitalia" value="posterior">
                  <p>Posterior</p>
                </div>
                <div className="sub-5">
                  <input
                    id="analregion"
                    type="checkbox"
                    name="posterior"
                    value="analregion"
                    checked={selectedHeadSites.includes(
                      "analregion|posterior|genitalia|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "analregion",
                        "posterior",
                        "genitalia",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="analregion">Anal region</label>
                </div>
                <div className="sub-5">
                  <input
                    id="perianalregion"
                    type="checkbox"
                    name="posterior"
                    value="perianalregion"
                    checked={selectedHeadSites.includes(
                      "perianalregion|posterior|genitalia|sites-involved|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "perianalregion",
                        "posterior",
                        "genitalia",
                        "sites-involved",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="perianalregion">Perianal region</label>
                </div>
              </div>
            </div>

            <div className="type">
              <h2>Type</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="erythematous"
                  name="type"
                  value="erythematous"
                  checked={selectedHeadSites.includes(
                    "erythematous|type|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "erythematous",
                      "type",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="erythematous">Erythematous</label>
              </div>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="non-erythematous"
                  name="type"
                  value="non-erythematous"
                  checked={selectedHeadSites.includes(
                    "non-erythematous|type|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "non-erythematous",
                      "type",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="non-erythematous">Non - erythematous</label>
              </div>
            </div>

            <div className="onset-of-lesion">
              <h2>Onset of Lesion</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="acute"
                  name="onset-of-lesion"
                  value="acute"
                  checked={selectedHeadSites.includes(
                    "acute|onset-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "acute",
                      "onset-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="acute">Acute(&lt;2 weeks) </label>
              </div>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="chronic"
                  name="onset-of-lesion"
                  value="chronic"
                  checked={selectedHeadSites.includes(
                    "chronic|onset-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "chronic",
                      "onset-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="chronic">Chronic(&gt;2 weeks)</label>
              </div>
            </div>

            <div className="number-of-lesion">
              <h2>Number of Lesions</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="single"
                  name="number-of-lesion"
                  value="single"
                  checked={selectedHeadSites.includes(
                    "single|number-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "single",
                      "number-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="single">Single </label>
              </div>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="multiple"
                  name="number-of-lesion"
                  value="multiple"
                  checked={selectedHeadSites.includes(
                    "multiple|number-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "multiple",
                      "number-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="multiple">Multiple</label>
              </div>
            </div>

            <div className="distribution">
              <h2>Distribution</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="symmetrical"
                  name="distribution"
                  value="symmetrical"
                  checked={selectedHeadSites.includes(
                    "symmetrical|distribution|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "symmetrical",
                      "distribution",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="symmetrical">Symmetrical </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="asymmetrical"
                  name="distribution"
                  value="asymmetrical"
                  checked={selectedHeadSites.includes(
                    "asymmetrical|distribution|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "asymmetrical",
                      "distribution",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="asymmetrical">Asymmetrical </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="unilateral"
                  name="distribution"
                  value="unilateral"
                  checked={selectedHeadSites.includes(
                    "unilateral|distribution|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "unilateral",
                      "distribution",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="unilateral">Unilateral </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="localised"
                  name="distribution"
                  value="localised"
                  checked={selectedHeadSites.includes(
                    "localised|distribution|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "localised",
                      "distribution",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="localised">Localised </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="generalised"
                  name="distribution"
                  value="generalised"
                  checked={selectedHeadSites.includes(
                    "generalised|distribution|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "generalised",
                      "distribution",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="generalised">Generalised </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="sunexposed"
                  name="distribution"
                  value="sunexposed"
                  checked={selectedHeadSites.includes(
                    "sunexposed|distribution|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "sunexposed",
                      "distribution",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="sunexposed">Sun exposed </label>
              </div>
            </div>

            <div className="arrangement">
              <h2>Arrangement</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="discrete"
                  name="arrangement"
                  value="discrete"
                  checked={selectedHeadSites.includes(
                    "discrete|arrangement|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "discrete",
                      "arrangement",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="discrete">Discrete </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="coalescing"
                  name="arrangement"
                  value="coalescing"
                  checked={selectedHeadSites.includes(
                    "coalescing|arrangement|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "coalescing",
                      "arrangement",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="coalescing">Coalescing </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="disseminated"
                  name="arrangement"
                  value="disseminated"
                  checked={selectedHeadSites.includes(
                    "disseminated|arrangement|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "disseminated",
                      "arrangement",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="disseminated">Disseminated </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="annular"
                  name="arrangement"
                  value="annular"
                  checked={selectedHeadSites.includes(
                    "annular|arrangement|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "annular",
                      "arrangement",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="annular">Annular </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="linear"
                  name="arrangement"
                  value="linear"
                  checked={selectedHeadSites.includes(
                    "linear|arrangement|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "linear",
                      "arrangement",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="linear">Linear </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="grouped"
                  name="arrangement"
                  value="grouped"
                  checked={selectedHeadSites.includes(
                    "grouped|arrangement|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "grouped",
                      "arrangement",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="grouped">Grouped </label>
              </div>
            </div>

            <div className="surface-palpation">
              <h2>Surface Palpation</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="smooth"
                  name="surface-palpation"
                  value="smooth"
                  checked={selectedHeadSites.includes(
                    "smooth|surface-palpation|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "smooth",
                      "surface-palpation",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="smooth">Smooth </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="rough"
                  name="surface-palpation"
                  value="rough"
                  checked={selectedHeadSites.includes(
                    "rough|surface-palpation|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "rough",
                      "surface-palpation",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="rough">Rough </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="uneven"
                  name="surface-palpation"
                  value="uneven"
                  checked={selectedHeadSites.includes(
                    "uneven|surface-palpation|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "uneven",
                      "surface-palpation",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="uneven">Uneven </label>
              </div>
            </div>

            <div className="deep-palpation">
              <h2>Deep Palpation</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="Normal"
                  name="deep-palpation"
                  value="normal"
                  checked={selectedHeadSites.includes(
                    "normal|deep-palpation|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "normal",
                      "deep-palpation",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="Normal">Normal </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="soft"
                  name="deep-palpation"
                  value="soft"
                  checked={selectedHeadSites.includes(
                    "soft|deep-palpation|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "soft",
                      "deep-palpation",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="soft">Soft </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="firm"
                  name="deep-palpation"
                  value="firm"
                  checked={selectedHeadSites.includes(
                    "firm|deep-palpation|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "firm",
                      "deep-palpation",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="firm">Firm </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="hard"
                  name="deep-palpation"
                  value="hard"
                  checked={selectedHeadSites.includes(
                    "hard|deep-palpation|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "hard",
                      "deep-palpation",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="hard">Hard </label>
              </div>
            </div>

            <div className="type-of-lesion">
              <h2>Type of Lesion</h2>

              <div className="flat">
                <h3>Flat</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="macule"
                    name="flat"
                    value="macule"
                    checked={selectedHeadSites.includes(
                      "macule|flat|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "macule",
                        "flat",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="macule">Macule</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="patch"
                    name="flat"
                    value="patch"
                    checked={selectedHeadSites.includes(
                      "patch|flat|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "patch",
                        "flat",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="patch">Patch</label>
                </div>
              </div>
              <div className="raised-solid-lesion">
                <h3>Raised Solid Lesion</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="papule"
                    name="raised-solid-lesion"
                    value="papule"
                    checked={selectedHeadSites.includes(
                      "papule|raised-solid-lesion|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "papule",
                        "raised-solid-lesion",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="papule">Papule</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="nodule"
                    name="raised-solid-lesion"
                    value="nodule"
                    checked={selectedHeadSites.includes(
                      "nodule|raised-solid-lesion|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "nodule",
                        "raised-solid-lesion",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="nodule">Nodule</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="plaque"
                    name="raised-solid-lesion"
                    value="plaque"
                    checked={selectedHeadSites.includes(
                      "plaque|raised-solid-lesion|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "plaque",
                        "raised-solid-lesion",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="plaque">Plaque</label>
                </div>
              </div>

              <div className="fluid- filled-lesion">
                <h3>Fluid Filled Lesion</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="vesicle"
                    name="fluid- filled-lesion"
                    value="vesicle"
                    checked={selectedHeadSites.includes(
                      "vesicle|fluid- filled-lesion|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "vesicle",
                        "fluid- filled-lesion",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="vesicle">Vesicle</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="bulla"
                    name="fluid- filled-lesion"
                    value="bulla"
                    checked={selectedHeadSites.includes(
                      "bulla|fluid- filled-lesion|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "bulla",
                        "fluid- filled-lesion",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="bulla">Bulla</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="pustules"
                    name="fluid- filled-lesion"
                    value="pustules"
                    checked={selectedHeadSites.includes(
                      "pustules|fluid- filled-lesion|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "pustules",
                        "fluid- filled-lesion",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="pustules">Pustules</label>
                </div>
              </div>

              <div className="lesions-due-to-broken-surface">
                <h3>Lesions due to broken Surface</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="erosion"
                    name="lesions-due-to-broken-surface"
                    value="erosion"
                    checked={selectedHeadSites.includes(
                      "erosion|lesions-due-to-broken-surface|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "erosion",
                        "lesions-due-to-broken-surface",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="erosion">Erosion</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="ulcer"
                    name="lesions-due-to-broken-surface"
                    value="ulcer"
                    checked={selectedHeadSites.includes(
                      "ulcer|lesions-due-to-broken-surface|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "ulcer",
                        "lesions-due-to-broken-surface",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="ulcer">Ulcer</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="fissure"
                    name="lesions-due-to-broken-surface"
                    value="fissure"
                    checked={selectedHeadSites.includes(
                      "fissure|lesions-due-to-broken-surface|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "fissure",
                        "lesions-due-to-broken-surface",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="fissure">Fissure</label>
                </div>
              </div>

              <div className="other-terms">
                <h3>Other Terms</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="weal"
                    name="other-terms"
                    value="weal"
                    checked={selectedHeadSites.includes(
                      "weal|other-terms|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "weal",
                        "other-terms",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="Weal">weal</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="cyst"
                    name="other-terms"
                    value="cyst"
                    checked={selectedHeadSites.includes(
                      "cyst|other-terms|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "cyst",
                        "other-terms",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="cyst">Cyst</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="scar"
                    name="other-terms"
                    value="scar"
                    checked={selectedHeadSites.includes(
                      "scar|other-terms|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "scar",
                        "other-terms",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="Scar">scar</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="comedon"
                    name="other-terms"
                    value="comedon"
                    checked={selectedHeadSites.includes(
                      "comedon|other-terms|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "comedon",
                        "other-terms",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="comedon">Comedon</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="burrow"
                    name="other-terms"
                    value="burrow"
                    checked={selectedHeadSites.includes(
                      "burrow|other-terms|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "comedon",
                        "other-terms",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="burrow">Burrow</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="abscess"
                    name="other-terms"
                    value="abscess"
                    checked={selectedHeadSites.includes(
                      "abscess|other-terms|type-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "abscess",
                        "other-terms",
                        "type-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="abscess">Abscess</label>
                </div>
              </div>
            </div>

            <div className="surface-feature-and-texture">
              <h2>Surface Feature & Texture</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="normal"
                  name="surface-feature-and-texture"
                  value="normal"
                  checked={selectedHeadSites.includes(
                    "normal|surface-feature-and-texture|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "normal",
                      "surface-feature-and-texture",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="normal">Normal </label>
              </div>

              <div className=" abnormal-keratinisation">
                <h3>Abnormal Keratinisation</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="hyperkeratotic"
                    name="abnormal-keratinisation"
                    value="hyperkeratotic"
                    checked={selectedHeadSites.includes(
                      "hyperkeratotic|abnormal-keratinisation|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "hyperkeratotic",
                        "abnormal-keratinisation",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="hyperkeratotic"> Hyperkeratotic</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="keratin-horn"
                    name="abnormal-keratinisation"
                    value="keratin-horn"
                    checked={selectedHeadSites.includes(
                      "keratin-horn|abnormal-keratinisation|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "keratin-horn",
                        "abnormal-keratinisation",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="keratin-horn">keratin Horn</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="scale"
                    name="abnormal-keratinisation"
                    value="scale"
                    checked={selectedHeadSites.includes(
                      "scale|abnormal-keratinisation|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "scale",
                        "abnormal-keratinisation",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="scale">Scale</label>
                </div>
              </div>

              <div className="broken-surface">
                <h3>Broken Surface</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="exudate"
                    name="broken-surface"
                    value="exudate"
                    checked={selectedHeadSites.includes(
                      "exudate|broken-surface|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "exudate",
                        "broken-surface",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="exudate"> Exudate</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="friable"
                    name="broken-surface"
                    value="friable"
                    checked={selectedHeadSites.includes(
                      "friable|broken-surface|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "friable",
                        "broken-surface",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="friable">Friable</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="slough"
                    name="broken-surface"
                    value="slough"
                    checked={selectedHeadSites.includes(
                      "slough|broken-surface|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "slough",
                        "broken-surface",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="slough">Slough</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="crust"
                    name="broken-surface"
                    value="crust"
                    checked={selectedHeadSites.includes(
                      "crust|broken-surface|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "crust",
                        "broken-surface",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="crust">Crust</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="excoriation"
                    name="broken-surface"
                    value="excoriation"
                    checked={selectedHeadSites.includes(
                      "excoriation|broken-surface|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "excoriation",
                        "broken-surface",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="excoriation">Excoriation</label>
                </div>
              </div>

              <div className="change-in-thickness">
                <h3>Change in Thickness</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="lichenification"
                    name="change-in-thickness"
                    value="lichenification"
                    checked={selectedHeadSites.includes(
                      "lichenification|change-in-thickness|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "lichenification",
                        "change-in-thickness",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="lichenification"> Lichenification</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="dermal-atrophy"
                    name="change-in-thickness"
                    value="dermal-atrophy"
                    checked={selectedHeadSites.includes(
                      "dermal-atrophy|change-in-thickness|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "dermal-atrophy",
                        "change-in-thickness",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="dermal-atrophy"> Dermal atrophy</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="epidermal-atrophy"
                    name="change-in-thickness"
                    value="epidermal-atrophy"
                    checked={selectedHeadSites.includes(
                      "epidermal-atrophy|change-in-thickness|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "epidermal-atrophy",
                        "change-in-thickness",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="epidermal-atrophy"> Epidermal atrophy</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="papillomatous"
                    name="change-in-thickness"
                    value="papillomatous"
                    checked={selectedHeadSites.includes(
                      "papillomatous|change-in-thickness|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "papillomatous",
                        "change-in-thickness",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="papillomatous">Papillomatous</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="warty"
                    name="change-in-thickness"
                    value="warty"
                    checked={selectedHeadSites.includes(
                      "warty|change-in-thickness|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "warty",
                        "change-in-thickness",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="warty">Warty</label>
                </div>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="umbilicated"
                    name="change-in-thickness"
                    value="umbilicated"
                    checked={selectedHeadSites.includes(
                      "umbilicated|change-in-thickness|surface-feature-and-texture|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "umbilicated",
                        "change-in-thickness",
                        "surface-feature-and-texture",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="umbilicated">Umbilicated</label>
                </div>
              </div>
            </div>

            <div className="colour-of-lesion">
              <h2>Colour of Lesion</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="red-pink-purple"
                  name="colour-of-lesion"
                  value="red-pink-purple"
                  checked={selectedHeadSites.includes(
                    "red-pink-purple|colour-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "red-pink-purple",
                      "colour-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="red-pink-purple">Red, Pink or Purple </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="brown"
                  name="colour-of-lesion"
                  value="brown"
                  checked={selectedHeadSites.includes(
                    "brown|colour-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "brown",
                      "colour-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="brown">Brown </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="blue-black"
                  name="colour-of-lesion"
                  value="blue-black"
                  checked={selectedHeadSites.includes(
                    "blue-black|colour-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "blue-black",
                      "colour-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="blue-black">Blue-Black </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="white"
                  name="colour-of-lesion"
                  value="white"
                  checked={selectedHeadSites.includes(
                    "white|colour-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "white",
                      "colour-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="white">White </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="black-purple"
                  name="colour-of-lesion"
                  value="black-purple"
                  checked={selectedHeadSites.includes(
                    "black-purple|colour-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "black-purple",
                      "colour-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="black-purple">Black-Purple </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="yellow"
                  name="colour-of-lesion"
                  value="yellow"
                  checked={selectedHeadSites.includes(
                    "yellow|colour-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "yellow",
                      "colour-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="yellow">Yellow </label>
              </div>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="blue-grey"
                  name="colour-of-lesion"
                  value="blue-grey"
                  checked={selectedHeadSites.includes(
                    "blue-grey|colour-of-lesion|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "blue-grey",
                      "colour-of-lesion",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="blue-grey">Blue-Grey </label>
              </div>
            </div>

            <div className="border-of-lesion-or-rash">
              <h2>Border of Lesion or Rash</h2>
              <div className="sub-3">
                <input
                  type="checkbox"
                  id="Well-defined-or-circumscribed"
                  name="border-of-lesion-or-rash"
                  value="Well-defined-or-circumscribed"
                  checked={selectedHeadSites.includes(
                    "Well-defined-or-circumscribed|border-of-lesion-or-rash|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "Well-defined-or-circumscribed",
                      "border-of-lesion-or-rash",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="Well-defined-or-circumscribed">
                  Well defined or circumscribed{" "}
                </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="poorly-defined"
                  name="border-of-lesion-or-rash"
                  value="poorly-defined"
                  checked={selectedHeadSites.includes(
                    "poorly-defined|border-of-lesion-or-rash|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "poorly-defined",
                      "border-of-lesion-or-rash",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="poorly-defined">Poorly defined </label>
              </div>

              <div className="sub-3">
                <input
                  type="checkbox"
                  id="accentuated-edge"
                  name="border-of-lesion-or-rash"
                  value="accentuated-edge"
                  checked={selectedHeadSites.includes(
                    "accentuated-edge|border-of-lesion-or-rash|NULL|NULL|NULL"
                  )}
                  onChange={() =>
                    handleHeadSitesCheckbox(
                      "accentuated-edge",
                      "border-of-lesion-or-rash",
                      "NULL",
                      "NULL",
                      "NULL"
                    )
                  }
                />
                <label htmlFor="accentuated-edge">Accentuated edge </label>
              </div>
            </div>

            <div className="shape-of-lesion">
              <h2>Shape of Lesion</h2>

              <div className="from-above">
                <h3>From Above</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="round-or-oval"
                    name="from-above"
                    value="round-or-oval"
                    checked={selectedHeadSites.includes(
                      "round-or-oval|from-above|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "round-or-oval",
                        "from-above",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="round-or-oval">Round or Oval</label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="irregular"
                    name="from-above"
                    value="irregular"
                    checked={selectedHeadSites.includes(
                      "irregular|from-above|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "irregular",
                        "from-above",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="irregular">Irregular</label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="square-or-rectangle"
                    name="from-above"
                    value="square-or-rectangle"
                    checked={selectedHeadSites.includes(
                      "square-or-rectangle|from-above|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "square-or-rectangle",
                        "from-above",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="square-or-rectangle">
                    Square or Rectangle
                  </label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="serpiginous"
                    name="from-above"
                    value="serpiginous"
                    checked={selectedHeadSites.includes(
                      "serpiginous|from-above|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "serpiginous",
                        "from-above",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="serpiginous">Serpiginous</label>
                </div>
              </div>

              <div className="in-profile">
                <h3>In Profile</h3>
                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="dome-shaped"
                    name="in-profile"
                    value="dome-shaped"
                    checked={selectedHeadSites.includes(
                      "dome-shaped|in-profile|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "dome-shaped",
                        "in-profile",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="dome-shaped">Dome Shaped</label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="spherical"
                    name="in-profile"
                    value="spherical"
                    checked={selectedHeadSites.includes(
                      "spherical|in-profile|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "spherical",
                        "in-profile",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="spherical">Spherical</label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="pedunculated"
                    name="in-profile"
                    value="pedunculated"
                    checked={selectedHeadSites.includes(
                      "pedunculated|in-profile|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "pedunculated",
                        "in-profile",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="pedunculated">Pedunculated</label>
                </div>

                <div className="sub-3">
                  <input
                    type="checkbox"
                    id="flat-topped"
                    name="in-profile"
                    value="flat-topped"
                    checked={selectedHeadSites.includes(
                      "flat-topped|in-profile|shape-of-lesion|NULL|NULL"
                    )}
                    onChange={() =>
                      handleHeadSitesCheckbox(
                        "flat-topped",
                        "in-profile",
                        "shape-of-lesion",
                        "NULL",
                        "NULL"
                      )
                    }
                  />
                  <label htmlFor="flat-topped">Flat topped</label>
                </div>
              </div>
            </div>
            <button onClick={handleSubmit} className="complaintform_btn">
              Submit
            </button>
          </div>

          <div className="col-2"></div>
        </div>
      </form>

      <div>
        <h2>Selected Sites:</h2>
        <ul>
          {selectedHeadSites.map((site) => (
            <li key={site}>{site}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Complaintform;
