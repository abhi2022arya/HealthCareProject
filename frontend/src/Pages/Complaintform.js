import "./Complaintform.css";
import Dropdown from "../Components/Dropdown";
import React, { useContext, useState , useEffect} from "react";
import Header from "../Components/Header";
import { userInfoContext } from "../GlobalState";
import arrowleft from "../image/arrow-left.png";


function Complaintform() {
  const { globalFirstName, globalLastName, globalEmail } =
    useContext(userInfoContext);
  const [selectedPrevCheckbox, setSelectedPrevCheckbox] = useState([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState([]);
  const [selectedCurrentCheckbox, setSelectedCurrentCheckbox] = useState(null);
 

  // Updated function to handle multiple checkboxes

  const handleCheckboxChange = (value) => {
    const updateCheckbox = [...selectedCheckbox];
    const len = updateCheckbox.length;
  
    if (updateCheckbox.includes(value)) {
      updateCheckbox.splice(updateCheckbox.indexOf(value),1);
    } else {
      updateCheckbox.push(value);
      if (checkboxValues.includes(value)) {
        setSelectedCurrentCheckbox(value);

        if (!selectedPrevCheckbox.includes(value) ) {
          setSelectedPrevCheckbox([...selectedPrevCheckbox, value]);
        
      }
      }
    }
  
    setSelectedCheckbox(updateCheckbox);
  
   
  
     
  };
  
  // Add useEffect to handlePrevCheckbox
  useEffect(() => {
    if (selectedPrevCheckbox.length > 0) {
      const lastSelectedCheckbox = selectedPrevCheckbox[selectedPrevCheckbox.length - 1];
      setSelectedCurrentCheckbox(lastSelectedCheckbox);
    }
  }, [selectedPrevCheckbox]);

  const handlePrevCheckbox = () => {
    // Retrieve the last selected checkbox from the selectedPrevCheckbox array
    if (selectedPrevCheckbox.length > 0) {
      const updatedPrevCheckbox = [...selectedPrevCheckbox];
      updatedPrevCheckbox.pop();
  
      // Update the state with the modified selectedPrevCheckbox array
      setSelectedPrevCheckbox(updatedPrevCheckbox);
  
    
    }
  };

  function handleSubmit() {
    const endpoint = "/submitComplaintForm";

    const formData = {
      selectedCheckbox: selectedCheckbox,
      firstName: globalFirstName,
      lastName: globalLastName,
      email: globalEmail,
    };

    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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

  const checkboxValues = [
    "gender",
    "male",
    "female",
    "sitesInvolved",
    "type",
    "lesion",
    "scalp",
    "scalpNormal",
    "affectedScalpScaly",
    "distribution",
    "arrangement",
    "surfacePalpation",
    "deepPalpation",
    "surfaceFeatureAndTexture",
    "head",
    "trunk",
    "genitaliaAnterior",
    "genitaliaPosterior",
    "extremities",
    "genitalia",
    "onsetOfLesion",
    "numberOfLesion",
    "typeOfLesion",
    "colorOfLesion",
    "borderOfLesion",
    "shapeOfLesion",
    "abnormalKeratinisation",
    "brokenSurface",
    "changeInThickness",
    "neck",
    "chest",
    "flexors",
    "extensors",
    "flat",
    "raisedSolidLesion",
    "fluidSolidLesion",
    "lesionDueToBrokenSurface",
    "otherTerms",
    "fromAbove",
    "inProfile",
    "axilla",
    "groin",
    "hand",
    "leg",
    "oneOrSeveralAreasOfCompleteHairLoss",
    "completeHairLoss",
    "singleAreaHairsAllShort",
    "afroCaribbeanWithTightlyPlatedHair",
    "scalpMarginsOnlyAffected",
    "mothEatenAppearance",
    "markHairsAroundEdgeEyebrowsAndBeard",
    "hairLossElseWhere",
    "childrenOrTeenagers",
    "hairHasPulledBackUnderTension",
    "anterior_Loss_Erythema_Around_Hairs_And_Eyebrows",
    "biopsy",
    "unwell_BodyRash_Lymphadenopathy",
    "short_Broken_Off_Hairs",
    "mycology",
    "positive",
    "mycologyNegative",
    "thick_Scale_Present",
    "itching",
    "itchingNegative"

  ];

  return (
    <div className="main-container">
      <Header />
      <div className="form-container">
        <div className="form-header">
          <div className="form-text">
            {selectedCurrentCheckbox === null
              ? "Complaint Form"
              : selectedCurrentCheckbox}
          </div>
          <div className="form-underline"></div>
        </div>
        <form className="">
          <div className="forms">
            {selectedCurrentCheckbox === null ? (
              <div className="form-input">
                <input
                  id="gender"
                  type="checkbox"
                  checked={selectedCheckbox.includes("gender")}
                  onChange={() => handleCheckboxChange("gender")}
                />
                <label htmlFor="gender">Gender</label>
              </div>
            ) : null}

            {selectedCurrentCheckbox === "gender" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    id="male"
                    type="checkbox"
                    checked={selectedCheckbox.includes("male")}
                    onChange={() => handleCheckboxChange("male")}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="form-input">
                  <input
                    id="female"
                    type="checkbox"
                    checked={selectedCheckbox.includes("female")}
                    onChange={() => handleCheckboxChange("female")}
                  />
                  <label htmlFor="female">female</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "male" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input type="checkbox" />C
                </div>
                <div className="form-input">
                  <input type="checkbox" />D
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "female" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    id="sitesInvolved"
                    type="checkbox"
                    checked={selectedCheckbox.includes("sitesInvolved")}
                    onChange={() => handleCheckboxChange("sitesInvolved")}
                  />
                  <label htmlFor="sitesInvolved">Sites Involved</label>
                </div>

                <div className="form-input">
                  <input
                    id="type"
                    type="checkbox"
                    checked={selectedCheckbox.includes("type")}
                    onChange={() => handleCheckboxChange("type")}
                  />
                  <label htmlFor="type">Type</label>
                </div>

                <div className="form-input">
                  <input
                    id="lesion"
                    type="checkbox"
                    checked={selectedCheckbox.includes("lesion")}
                    onChange={() => handleCheckboxChange("lesion")}
                  />
                  <label htmlFor="lesion">Lesion</label>
                </div>

                <div className="form-input">
                  <input
                    id="distribution"
                    type="checkbox"
                    checked={selectedCheckbox.includes("distribution")}
                    onChange={() => handleCheckboxChange("distribution")}
                  />
                  <label htmlFor="distribution">Distribution</label>
                </div>

                <div className="form-input">
                  <input
                    id="arrangement"
                    type="checkbox"
                    checked={selectedCheckbox.includes("arrangement")}
                    onChange={() => handleCheckboxChange("arrangement")}
                  />
                  <label htmlFor="arrangement">Arrangement</label>
                </div>

                <div className="form-input">
                  <input
                    id="surfacePalpation"
                    type="checkbox"
                    checked={selectedCheckbox.includes("surfacePalpation")}
                    onChange={() => handleCheckboxChange("surfacePalpation")}
                  />
                  <label htmlFor="surfacePalpation">Surface Palpation</label>
                </div>

                <div className="form-input">
                  <input
                    id="deepPalpation"
                    type="checkbox"
                    checked={selectedCheckbox.includes("deepPalpation")}
                    onChange={() => handleCheckboxChange("deepPalpation")}
                  />
                  <label htmlFor="deepPalpation">Deep Palpation</label>
                </div>

                <div className="form-input">
                  <input
                    id="surfaceFeatureAndTexture"
                    type="checkbox"
                    checked={selectedCheckbox.includes(
                      "surfaceFeatureAndTexture"
                    )}
                    onChange={() =>
                      handleCheckboxChange("surfaceFeatureAndTexture")
                    }
                  />
                  <label htmlFor="surfaceFeatureAndTexture">
                    Surface Feature & Texture
                  </label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "sitesInvolved" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    id="head"
                    type="checkbox"
                    checked={selectedCheckbox.includes("head")}
                    onChange={() => handleCheckboxChange("head")}
                  />
                  <label htmlFor="head">Head</label>
                </div>
                <div className="form-input">
                  <input
                    id="trunk"
                    type="checkbox"
                    checked={selectedCheckbox.includes("trunk")}
                    onChange={() => handleCheckboxChange("trunk")}
                  />
                  <label htmlFor="trunk">Trunk</label>
                </div>
                <div className="form-input">
                  <input
                    id="extremities"
                    type="checkbox"
                    checked={selectedCheckbox.includes("extremities")}
                    onChange={() => handleCheckboxChange("extremities")}
                  />
                  <label htmlFor="extremities">Extremities</label>
                </div>
                <div className="form-input">
                  <input
                    id="genitalia"
                    type="checkbox"
                    checked={selectedCheckbox.includes("genitalia")}
                    onChange={() => handleCheckboxChange("genitalia")}
                  />
                  <label htmlFor="genitalia">Genitalia</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "head" && (
              <div className="form-inputs">
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="face"
                    checked={selectedCheckbox.includes("face")}
                    onChange={() => handleCheckboxChange("face")}
                  />
                  <label htmlFor="face">Face</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="eyes"
                    checked={selectedCheckbox.includes("eyes")}
                    onChange={() => handleCheckboxChange("eyes")}
                  />
                  <label htmlFor="eyes">Eyes</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="nose"
                    checked={selectedCheckbox.includes("nose")}
                    onChange={() => handleCheckboxChange("nose")}
                  />
                  <label htmlFor="nose">Nose</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="ear"
                    checked={selectedCheckbox.includes("ear")}
                    onChange={() => handleCheckboxChange("ear")}
                  />
                  <label htmlFor="ear">Ear</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="lips"
                    checked={selectedCheckbox.includes("lips")}
                    onChange={() => handleCheckboxChange("lips")}
                  />
                  <label htmlFor="lips">Lips</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="mouthCavity"
                    checked={selectedCheckbox.includes("mouthCavity")}
                    onChange={() => handleCheckboxChange("mouthCavity")}
                  />
                  <label htmlFor="mouthCavity">Mouth Cavity</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="scalp"
                    checked={selectedCheckbox.includes("scalp")}
                    onChange={() => handleCheckboxChange("scalp")}
                  />
                  <label htmlFor="scalp">Scalp</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="neck"
                    checked={selectedCheckbox.includes("neck")}
                    onChange={() => handleCheckboxChange("neck")}
                  />
                  <label htmlFor="neck">Neck</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "scalp" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="scalpNormal"
                    checked={selectedCheckbox.includes("scalpNormal")}
                    onChange={() => handleCheckboxChange("scalpNormal")}
                  />
                  <label htmlFor="scalpNormal">Scalp Normal</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="affectedScalpScaly"
                    checked={selectedCheckbox.includes("affectedScalpScaly")}
                    onChange={() => handleCheckboxChange("affectedScalpScaly")}
                  />
                  <label htmlFor="affectedScalpScaly">Affected Scalp Scaly</label>
                </div>
              </div>
            )}


          {selectedCurrentCheckbox === "scalpNormal" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
               
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="oneOrSeveralAreasOfCompleteHairLoss"
                    checked={selectedCheckbox.includes("oneOrSeveralAreasOfCompleteHairLoss")}
                    onChange={() => handleCheckboxChange("oneOrSeveralAreasOfCompleteHairLoss")}
                  />
                  <label htmlFor="oneOrSeveralAreasOfCompleteHairLoss">One or Several well defined areas of complete hair loss</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="completeHairLoss"
                    checked={selectedCheckbox.includes("completeHairLoss")}
                    onChange={() => handleCheckboxChange("completeHairLoss")}
                  />
                  <label htmlFor="completeHairLoss">Complete hair loss</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="singleAreaHairsAllShort"
                    checked={selectedCheckbox.includes("singleAreaHairsAllShort")}
                    onChange={() => handleCheckboxChange("singleAreaHairsAllShort")}
                  />
                  <label htmlFor="singleAreaHairsAllShort">single area,hair all short(&gt;1 cm)</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="afroCaribbeanWithTightlyPlatedHair"
                    checked={selectedCheckbox.includes("afroCaribbeanWithTightlyPlatedHair")}
                    onChange={() => handleCheckboxChange("afroCaribbeanWithTightlyPlatedHair")}
                  />
                  <label htmlFor="afroCaribbeanWithTightlyPlatedHair">afro-Caribbean with tightly plated hair</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="scalpMarginsOnlyAffected"
                    checked={selectedCheckbox.includes("scalpMarginsOnlyAffected")}
                    onChange={() => handleCheckboxChange("scalpMarginsOnlyAffected")}
                  />
                  <label htmlFor="scalpMarginsOnlyAffected">Scalp margins only affected</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="mothEatenAppearance"
                    checked={selectedCheckbox.includes("mothEatenAppearance")}
                    onChange={() => handleCheckboxChange("mothEatenAppearance")}
                  />
                  <label htmlFor="mothEatenAppearance">'Moth eaten'appearance</label>
                </div>
                
              </div>
            )}

      {selectedCurrentCheckbox === "oneOrSeveralAreasOfCompleteHairLoss" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="markHairsAroundEdgeEyebrowsAndBeard"
                    checked={selectedCheckbox.includes("markHairsAroundEdgeEyebrowsAndBeard")}
                    onChange={() => handleCheckboxChange("markHairsAroundEdgeEyebrowsAndBeard")}
                  />
                  <label htmlFor="markHairsAroundEdgeEyebrowsAndBeard">Mark hairs around edge eyebrows and beard</label>
                </div>
                </div>
                )}

         {selectedCurrentCheckbox === "markHairsAroundEdgeEyebrowsAndBeard" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="alopeciaAreata"
                    checked={selectedCheckbox.includes("alopeciaAreata")}
                    onChange={() => handleCheckboxChange("alopeciaAreata")}
                  />
                  <label htmlFor="alopeciaAreata">ALOPECIAAREATA</label>
                </div>
                </div>
                )}

    {selectedCurrentCheckbox === "completeHairLoss" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="hairLossElseWhere"
                    checked={selectedCheckbox.includes("hairLossElseWhere")}
                    onChange={() => handleCheckboxChange("hairLossElseWhere")}
                  />
                  <label htmlFor="hairLossElseWhere">?Hair loss Elsewhere</label>
                </div>
                </div>
                )}

        {selectedCurrentCheckbox === "hairLossElseWhere" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="alopeciatotalisOrUniversalis"
                    checked={selectedCheckbox.includes("alopeciatotalisOrUniversalis")}
                    onChange={() => handleCheckboxChange("alopeciatotalisOrUniversalis")}
                  />
                  <label htmlFor="alopeciatotalisOrUniversalis">ALOPECIA TOTALIS/UNIVERSALIS</label>
                </div>
                </div>
                )}

    {selectedCurrentCheckbox === "singleAreaHairsAllShort" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="childrenOrTeenagers"
                    checked={selectedCheckbox.includes("childrenOrTeenagers")}
                    onChange={() => handleCheckboxChange("childrenOrTeenagers")}
                  />
                  <label htmlFor="childrenOrTeenagers">children/Teenagers</label>
                </div>
                </div>
                )}


    {selectedCurrentCheckbox === "childrenOrTeenagers" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="trichotillomania"
                    checked={selectedCheckbox.includes("trichotillomania")}
                    onChange={() => handleCheckboxChange("trichotillomania")}
                  />
                  <label htmlFor="trichotillomania">TRICHOTILLOMANIA</label>
                </div>
                </div>
                )}

{selectedCurrentCheckbox === "afroCaribbeanWithTightlyPlatedHair" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="hairHasPulledBackUnderTension"
                    checked={selectedCheckbox.includes("hairHasPulledBackUnderTension")}
                    onChange={() => handleCheckboxChange("hairHasPulledBackUnderTension")}
                  />
                  <label htmlFor="hairHasPulledBackUnderTension">Hair has pulled back under tension</label>
                </div>
                </div>
                )}

{selectedCurrentCheckbox === "hairHasPulledBackUnderTension" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="tractionalopecia"
                    checked={selectedCheckbox.includes("tractionalopecia")}
                    onChange={() => handleCheckboxChange("tractionalopecia")}
                  />
                  <label htmlFor="tractionalopecia">TRACTIONALOPECIA</label>
                </div>
                </div>
                )}

      {selectedCurrentCheckbox === "scalpMarginsOnlyAffected" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="anterior_Loss_Erythema_Around_Hairs_And_Eyebrows"
                    checked={selectedCheckbox.includes("anterior_Loss_Erythema_Around_Hairs_And_Eyebrows")}
                    onChange={() => handleCheckboxChange("anterior_Loss_Erythema_Around_Hairs_And_Eyebrows")}
                  />
                  <label htmlFor="anterior_Loss_Erythema_Around_Hairs_And_Eyebrows">anterior loss erythema around hairs and eyebrows </label>
                </div>
                </div>
                )}
   {selectedCurrentCheckbox === "anterior_Loss_Erythema_Around_Hairs_And_Eyebrows" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="biopsy"
                    checked={selectedCheckbox.includes("biopsy")}
                    onChange={() => handleCheckboxChange("biopsy")}
                  />
                  <label htmlFor="biopsy">biopsy </label>
                </div>
                </div>
                )}
   {selectedCurrentCheckbox === "biopsy" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="frontal_Fibrosing_Alopecia"
                    checked={selectedCheckbox.includes("frontal_Fibrosing_Alopecia")}
                    onChange={() => handleCheckboxChange("frontal_Fibrosing_Alopecia")}
                  />
                  <label htmlFor="frontal_Fibrosing_Alopecia">FRONTAL FIBROSING ALOPECIA</label>
                </div>
                </div>
                )}


{selectedCurrentCheckbox === "mothEatenAppearance" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="unwell_BodyRash_Lymphadenopathy"
                    checked={selectedCheckbox.includes("unwell_BodyRash_Lymphadenopathy")}
                    onChange={() => handleCheckboxChange("unwell_BodyRash_Lymphadenopathy")}
                  />
                  <label htmlFor="unwell_BodyRash_Lymphadenopathy">Unwell body rash lymphadenopathy</label>
                </div>
                </div>
                )}



{selectedCurrentCheckbox === "unwell_BodyRash_Lymphadenopathy" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="secondary_Syphills"
                    checked={selectedCheckbox.includes("secondary_Syphills")}
                    onChange={() => handleCheckboxChange("secondary_Syphills")}
                  />
                  <label htmlFor="secondary_Syphills">SECONDARY SYPHILLS</label>
                </div>
                </div>
                )}


{selectedCurrentCheckbox === "affectedScalpScaly" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="short_Broken_Off_Hairs"
                    checked={selectedCheckbox.includes("short_Broken_Off_Hairs")}
                    onChange={() => handleCheckboxChange("short_Broken_Off_Hairs")}
                  />
                  <label htmlFor="short_Broken_Off_Hairs">Short broken-off hairs</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="thick_Scale_Present"
                    checked={selectedCheckbox.includes("thick_Scale_Present")}
                    onChange={() => handleCheckboxChange("thick_Scale_Present")}
                  />
                  <label htmlFor="thick_Scale_Present">Thick scale present</label>
                </div>
              </div>
            )}

  {selectedCurrentCheckbox === "short_Broken_Off_Hairs" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="mycology"
                    checked={selectedCheckbox.includes("mycology")}
                    onChange={() => handleCheckboxChange("mycology")}
                  />
                  <label htmlFor="mycology">Mycology</label>
                </div>
                </div>
                )}

{selectedCurrentCheckbox === "mycology" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="positive"
                    checked={selectedCheckbox.includes("positive")}
                    onChange={() => handleCheckboxChange("positive")}
                  />
                  <label htmlFor="positive">Positive</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="mycologyNegative"
                    checked={selectedCheckbox.includes("mycologyNegative")}
                    onChange={() => handleCheckboxChange("mycologyNegative")}
                  />
                  <label htmlFor="mycologyNegative">Negative</label>
                </div>
                </div>
                )}
    
    {selectedCurrentCheckbox === "positive" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="scalpRingWorm"
                    checked={selectedCheckbox.includes("scalpRingWorm")}
                    onChange={() => handleCheckboxChange("scalpRingWorm")}
                  />
                  <label htmlFor="scalpRingWorm">SCALP RINGWORM</label>
                </div>
                </div>
                )}

{selectedCurrentCheckbox === "mycologyNegative" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="lichenSimplex_Psoriasis_PityriasisAmiantacea"
                    checked={selectedCheckbox.includes("lichenSimplex_Psoriasis_PityriasisAmiantacea")}
                    onChange={() => handleCheckboxChange("lichenSimplex_Psoriasis_PityriasisAmiantacea")}
                  />
                  <label htmlFor="lichenSimplex_Psoriasis_PityriasisAmiantacea"> LICHEN SIMPLEX,PSORIASIS,PITYRIASIS AMIANTACEA</label>
                </div>
                </div>
                )}



  {selectedCurrentCheckbox === "thick_Scale_Present" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="itching"
                    checked={selectedCheckbox.includes("itching")}
                    onChange={() => handleCheckboxChange("itching")}
                  />
                  <label htmlFor="itching"> Itching++ </label>
                </div>
                </div>
                )}

{selectedCurrentCheckbox === "itching" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="itchingNegative"
                    checked={selectedCheckbox.includes("itchingNegative")}
                    onChange={() => handleCheckboxChange("itchingNegative")}
                  />
                  <label htmlFor="itchingNegative"> Negative </label>
                </div>
                </div>
                )}

{selectedCurrentCheckbox === "itchingNegative" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="lichenSimplex_Psoriasis_PityriasisAmiantacea"
                    checked={selectedCheckbox.includes("lichenSimplex_Psoriasis_PityriasisAmiantacea")}
                    onChange={() => handleCheckboxChange("lichenSimplex_Psoriasis_PityriasisAmiantacea")}
                  />
                  <label htmlFor="lichenSimplex_Psoriasis_PityriasisAmiantacea"> LICHEN SIMPLEX,PSORIASIS,PITYRIASIS AMIANTACEA</label>
                </div>
                </div>
                )}



            {selectedCurrentCheckbox === "neck" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="neckAnterior"
                    checked={selectedCheckbox.includes("neckAnterior")}
                    onChange={() => handleCheckboxChange("neckAnterior")}
                  />
                  <label htmlFor="neckAnterior">Anterior</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="neckPosterior"
                    checked={selectedCheckbox.includes("neckPosterior")}
                    onChange={() => handleCheckboxChange("neckPosterior")}
                  />
                  <label htmlFor="neckPosterior">Posterior</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "trunk" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="chest"
                    checked={selectedCheckbox.includes("chest")}
                    onChange={() => handleCheckboxChange("chest")}
                  />
                  <label htmlFor="chest">Chest</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="abdomen"
                    checked={selectedCheckbox.includes("abdomen")}
                    onChange={() => handleCheckboxChange("abdomen")}
                  />
                  <label htmlFor="abdomen">Abdomen</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="umbilicus"
                    checked={selectedCheckbox.includes("umbilicus")}
                    onChange={() => handleCheckboxChange("umbilicus")}
                  />
                  <label htmlFor="umbilicus">Umbilicus</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "chest" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="onBreast"
                    checked={selectedCheckbox.includes("onBreast")}
                    onChange={() => handleCheckboxChange("onBreast")}
                  />
                  <label htmlFor="cheonBreastst">On Breast</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="onFold"
                    checked={selectedCheckbox.includes("onFold")}
                    onChange={() => handleCheckboxChange("onFold")}
                  />
                  <label htmlFor="onFold">On Fold</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "extremities" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="flexors"
                    checked={selectedCheckbox.includes("flexors")}
                    onChange={() => handleCheckboxChange("flexors")}
                  />
                  <label htmlFor="flexors">Flexors</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="extensors"
                    checked={selectedCheckbox.includes("extensors")}
                    onChange={() => handleCheckboxChange("extensors")}
                  />
                  <label htmlFor="extensors">Extensors</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "flexors" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="axilla"
                    checked={selectedCheckbox.includes("axilla")}
                    onChange={() => handleCheckboxChange("axilla")}
                  />
                  <label htmlFor="axilla">Axilla</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="groin"
                    checked={selectedCheckbox.includes("groin")}
                    onChange={() => handleCheckboxChange("groin")}
                  />
                  <label htmlFor="groin">Groin</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "axilla" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="axillaRight"
                    checked={selectedCheckbox.includes("axillaRight")}
                    onChange={() => handleCheckboxChange("axillaRight")}
                  />
                  <label htmlFor="axillaRight">Right</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="axillaLeft"
                    checked={selectedCheckbox.includes("axillaLeft")}
                    onChange={() => handleCheckboxChange("axillaLeft")}
                  />
                  <label htmlFor="axillaLeft">Left</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "groin" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="groinRight"
                    checked={selectedCheckbox.includes("groinRight")}
                    onChange={() => handleCheckboxChange("groinRight")}
                  />
                  <label htmlFor="groinRight">Right</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="groinLeft"
                    checked={selectedCheckbox.includes("groinLeft")}
                    onChange={() => handleCheckboxChange("groinLeft")}
                  />
                  <label htmlFor="groinLeft">Left</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "extensors" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="hand"
                    checked={selectedCheckbox.includes("hand")}
                    onChange={() => handleCheckboxChange("hand")}
                  />
                  <label htmlFor="hand">Hand</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="leg"
                    checked={selectedCheckbox.includes("leg")}
                    onChange={() => handleCheckboxChange("leg")}
                  />
                  <label htmlFor="leg">Leg</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "hand" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="handRight"
                    checked={selectedCheckbox.includes("handRight")}
                    onChange={() => handleCheckboxChange("handRight")}
                  />
                  <label htmlFor="handRight">Right</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="handLeft"
                    checked={selectedCheckbox.includes("handLeft")}
                    onChange={() => handleCheckboxChange("handLeft")}
                  />
                  <label htmlFor="handLeft">Left</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "leg" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="legRight"
                    checked={selectedCheckbox.includes("legRight")}
                    onChange={() => handleCheckboxChange("legRight")}
                  />
                  <label htmlFor="legRight">Right</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="legLeft"
                    checked={selectedCheckbox.includes("legLeft")}
                    onChange={() => handleCheckboxChange("legLeft")}
                  />
                  <label htmlFor="legLeft">Left</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "genitalia" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="genitaliaAnterior"
                    checked={selectedCheckbox.includes("genitaliaAnterior")}
                    onChange={() => handleCheckboxChange("genitaliaAnterior")}
                  />
                  <label htmlFor="genitaliaAnterior">Anterior</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="genitaliaPosterior"
                    checked={selectedCheckbox.includes("genitaliaPosterior")}
                    onChange={() => handleCheckboxChange("genitaliaPosterior")}
                  />
                  <label htmlFor="genitaliaPosterior">Posterior</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "genitaliaAnterior" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="penileRegion"
                    checked={selectedCheckbox.includes("penileRegion")}
                    onChange={() => handleCheckboxChange("penileRegion")}
                  />
                  <label htmlFor="penileRegion">Penile Region</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="scrotalRegion"
                    checked={selectedCheckbox.includes("scrotalRegion")}
                    onChange={() => handleCheckboxChange("scrotalRegion")}
                  />
                  <label htmlFor="scrotalRegion">Scrotal Region</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="vaginalRegion"
                    checked={selectedCheckbox.includes("vaginalRegion")}
                    onChange={() => handleCheckboxChange("vaginalRegion")}
                  />
                  <label htmlFor="vaginalRegion">Vaginal Region</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="perivaginalRegion"
                    checked={selectedCheckbox.includes("perivaginalRegion")}
                    onChange={() => handleCheckboxChange("perivaginalRegion")}
                  />
                  <label htmlFor="perivaginalRegion">Perivaginal Region</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "genitaliaPosterior" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="analRegion"
                    checked={selectedCheckbox.includes("analRegion")}
                    onChange={() => handleCheckboxChange("analRegion")}
                  />
                  <label htmlFor="analRegion">Anal Region</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="perianalRegion"
                    checked={selectedCheckbox.includes("perianalRegion")}
                    onChange={() => handleCheckboxChange("perianalRegion")}
                  />
                  <label htmlFor="perianalRegion">Perianal Region</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "type" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="erythematous"
                    checked={selectedCheckbox.includes("erythematous")}
                    onChange={() => handleCheckboxChange("erythematous")}
                  />
                  <label htmlFor="erythematous">Erythematous</label>
                </div>

                <div className="form-input">
                  <input
                    type="checkbox"
                    id="nonErythematous"
                    checked={selectedCheckbox.includes("nonErythematous")}
                    onChange={() => handleCheckboxChange("nonErythematous")}
                  />
                  <label htmlFor="nonErythematous">Non-Erythematous</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "lesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="onsetOfLesion"
                    checked={selectedCheckbox.includes("onsetOfLesion")}
                    onChange={() => handleCheckboxChange("onsetOfLesion")}
                  />
                  <label htmlFor="onsetOfLesion">Onset Of Lesion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="numberOfLesion"
                    checked={selectedCheckbox.includes("numberOfLesion")}
                    onChange={() => handleCheckboxChange("numberOfLesion")}
                  />
                  <label htmlFor="numberOfLesion">Number Of Lesion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="typeOfLesion"
                    checked={selectedCheckbox.includes("typeOfLesion")}
                    onChange={() => handleCheckboxChange("typeOfLesion")}
                  />
                  <label htmlFor="typeOfLesion">Type Of Lesion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="colorOfLesion"
                    checked={selectedCheckbox.includes("colorOfLesion")}
                    onChange={() => handleCheckboxChange("colorOfLesion")}
                  />
                  <label htmlFor="colorOfLesion">Color Of Lesion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="borderOfLesion"
                    checked={selectedCheckbox.includes("borderOfLesion")}
                    onChange={() => handleCheckboxChange("borderOfLesion")}
                  />
                  <label htmlFor="borderOfLesion">Border Of Lesion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="shapeOfLesion"
                    checked={selectedCheckbox.includes("shapeOfLesion")}
                    onChange={() => handleCheckboxChange("shapeOfLesion")}
                  />
                  <label htmlFor="shapeOfLesion">Shape Of Lesion</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "onsetOfLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="acute"
                    checked={selectedCheckbox.includes("acute")}
                    onChange={() => handleCheckboxChange("acute")}
                  />
                  <label htmlFor="acute">Acute</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="chronic"
                    checked={selectedCheckbox.includes("chronic")}
                    onChange={() => handleCheckboxChange("chronic")}
                  />
                  <label htmlFor="chronic">Chronic</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "numberOfLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="single"
                    checked={selectedCheckbox.includes("single")}
                    onChange={() => handleCheckboxChange("single")}
                  />
                  <label htmlFor="single">Single</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="multiple"
                    checked={selectedCheckbox.includes("multiple")}
                    onChange={() => handleCheckboxChange("multiple")}
                  />
                  <label htmlFor="multiple">Multiple</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "typeOfLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="flat"
                    checked={selectedCheckbox.includes("flat")}
                    onChange={() => handleCheckboxChange("flat")}
                  />
                  <label htmlFor="flat">Flat</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="raisedSolidLesion"
                    checked={selectedCheckbox.includes("raisedSolidLesion")}
                    onChange={() => handleCheckboxChange("raisedSolidLesion")}
                  />
                  <label htmlFor="raisedSolidLesion">Raised Solid Lesion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="fluidFilledLesion"
                    checked={selectedCheckbox.includes("fluidFilledLesion")}
                    onChange={() => handleCheckboxChange("fluidFilledLesion")}
                  />
                  <label htmlFor="fluidFilledLesion">Fluid Filled Lesion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="lesionDueToBrokenSurface"
                    checked={selectedCheckbox.includes(
                      "lesionDueToBrokenSurface"
                    )}
                    onChange={() =>
                      handleCheckboxChange("lesionDueToBrokenSurface")
                    }
                  />
                  <label htmlFor="lesionDueToBrokenSurface">
                    Lesion Due To Broken Surface
                  </label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="otherTerms"
                    checked={selectedCheckbox.includes("otherTerms")}
                    onChange={() => handleCheckboxChange("otherTerms")}
                  />
                  <label htmlFor="otherTerms">Other Terms</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "colorOfLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="redPinkOrPurple"
                    checked={selectedCheckbox.includes("redPinkOrPurple")}
                    onChange={() => handleCheckboxChange("redPinkOrPurple")}
                  />
                  <label htmlFor="redPinkOrPurple">Red Pink Or Purple</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="blueBlack"
                    checked={selectedCheckbox.includes("blueBlack")}
                    onChange={() => handleCheckboxChange("blueBlack")}
                  />
                  <label htmlFor="blueBlack">Blue-Black</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="blackPurple"
                    checked={selectedCheckbox.includes("blackPurple")}
                    onChange={() => handleCheckboxChange("blackPurple")}
                  />
                  <label htmlFor="blackPurple">Black-Purple</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="white"
                    checked={selectedCheckbox.includes("white")}
                    onChange={() => handleCheckboxChange("white")}
                  />
                  <label htmlFor="white">White</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="brown"
                    checked={selectedCheckbox.includes("brown")}
                    onChange={() => handleCheckboxChange("brown")}
                  />
                  <label htmlFor="brown">Brown</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="yellow"
                    checked={selectedCheckbox.includes("yellow")}
                    onChange={() => handleCheckboxChange("yellow")}
                  />
                  <label htmlFor="yellow">Yellow</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="blueGray"
                    checked={selectedCheckbox.includes("blueGray")}
                    onChange={() => handleCheckboxChange("blueGray")}
                  />
                  <label htmlFor="blueGray">Blue-Gray</label>
                </div>
              </div>
            )}
            {selectedCurrentCheckbox === "borderOfLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="wellDefinedOrCircumscribed"
                    checked={selectedCheckbox.includes(
                      "wellDefinedOrCircumscribed"
                    )}
                    onChange={() =>
                      handleCheckboxChange("wellDefinedOrCircumscribed")
                    }
                  />
                  <label htmlFor="wellDefinedOrCircumscribed">
                    Well Defined Or Circumscribed
                  </label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="poorlyDefined"
                    checked={selectedCheckbox.includes("poorlyDefined")}
                    onChange={() => handleCheckboxChange("poorlyDefined")}
                  />
                  <label htmlFor="poorlyDefined">Poorly Defined</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="accentuatedEdge"
                    checked={selectedCheckbox.includes("accentuatedEdge")}
                    onChange={() => handleCheckboxChange("accentuatedEdge")}
                  />
                  <label htmlFor="accentuatedEdge">Accentuated Edge</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "shapeOfLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="fromAbove"
                    checked={selectedCheckbox.includes("fromAbove")}
                    onChange={() => handleCheckboxChange("fromAbove")}
                  />
                  <label htmlFor="fromAbove">From Above</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="inProfile"
                    checked={selectedCheckbox.includes("inProfile")}
                    onChange={() => handleCheckboxChange("inProfile")}
                  />
                  <label htmlFor="inProfile">In Profile</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "flat" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="macule"
                    checked={selectedCheckbox.includes("macule")}
                    onChange={() => handleCheckboxChange("macule")}
                  />
                  <label htmlFor="macule">Macule</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="patch"
                    checked={selectedCheckbox.includes("patch")}
                    onChange={() => handleCheckboxChange("patch")}
                  />
                  <label htmlFor="patch">Patch</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "raisedSolidLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="papule"
                    checked={selectedCheckbox.includes("papule")}
                    onChange={() => handleCheckboxChange("papule")}
                  />
                  <label htmlFor="papule">Papule</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="nodule"
                    checked={selectedCheckbox.includes("nodule")}
                    onChange={() => handleCheckboxChange("nodule")}
                  />
                  <label htmlFor="nodule">Nodule</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="plaque"
                    checked={selectedCheckbox.includes("plaque")}
                    onChange={() => handleCheckboxChange("plaque")}
                  />
                  <label htmlFor="plaque">plaque</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "fluidFilledLesion" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="vesicle"
                    checked={selectedCheckbox.includes("vesicle")}
                    onChange={() => handleCheckboxChange("vesicle")}
                  />
                  <label htmlFor="vesicle">Vesicle</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="bulla"
                    checked={selectedCheckbox.includes("bulla")}
                    onChange={() => handleCheckboxChange("bulla")}
                  />
                  <label htmlFor="bulla">Bulla</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="pustules"
                    checked={selectedCheckbox.includes("pustules")}
                    onChange={() => handleCheckboxChange("pustules")}
                  />
                  <label htmlFor="pustules">Pustules</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "lesionDueToBrokenSurface" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="erosion"
                    checked={selectedCheckbox.includes("erosion")}
                    onChange={() => handleCheckboxChange("erosion")}
                  />
                  <label htmlFor="erosion">Erosion</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="ulcer"
                    checked={selectedCheckbox.includes("ulcer")}
                    onChange={() => handleCheckboxChange("ulcer")}
                  />
                  <label htmlFor="ulcer">Ulcer</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="fissure"
                    checked={selectedCheckbox.includes("fissure")}
                    onChange={() => handleCheckboxChange("fissure")}
                  />
                  <label htmlFor="fissure">Fissure</label>
                </div>
              </div>
            )}
            {selectedCurrentCheckbox === "otherTerms" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="weal"
                    checked={selectedCheckbox.includes("weal")}
                    onChange={() => handleCheckboxChange("weal")}
                  />
                  <label htmlFor="weal">Weal</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="cyst"
                    checked={selectedCheckbox.includes("cyst")}
                    onChange={() => handleCheckboxChange("cyst")}
                  />
                  <label htmlFor="cyst">Cyst</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="scar"
                    checked={selectedCheckbox.includes("scar")}
                    onChange={() => handleCheckboxChange("scar")}
                  />
                  <label htmlFor="scar">Scar</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="comedon"
                    checked={selectedCheckbox.includes("comedon")}
                    onChange={() => handleCheckboxChange("comedon")}
                  />
                  <label htmlFor="comedon">Comedon</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="burrow"
                    checked={selectedCheckbox.includes("burrow")}
                    onChange={() => handleCheckboxChange("burrow")}
                  />
                  <label htmlFor="burrow">Burrow</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="abscess"
                    checked={selectedCheckbox.includes("abscess")}
                    onChange={() => handleCheckboxChange("abscess")}
                  />
                  <label htmlFor="abscess">Abscess</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "fromAbove" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="roundOrOval"
                    checked={selectedCheckbox.includes("roundOrOval")}
                    onChange={() => handleCheckboxChange("roundOrOval")}
                  />
                  <label htmlFor="roundOrOval">round Or Oval</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="irregular"
                    checked={selectedCheckbox.includes("irregular")}
                    onChange={() => handleCheckboxChange("irregular")}
                  />
                  <label htmlFor="irregular">Irregular</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="squareOrRectangular"
                    checked={selectedCheckbox.includes("squareOrRectangular")}
                    onChange={() => handleCheckboxChange("squareOrRectangular")}
                  />
                  <label htmlFor="squareOrRectangular">
                    Square Or Rectangular
                  </label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="serpiginous"
                    checked={selectedCheckbox.includes("serpiginous")}
                    onChange={() => handleCheckboxChange("serpiginous")}
                  />
                  <label htmlFor="serpiginous">Serpiginous</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "inProfile" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="domeShaped"
                    checked={selectedCheckbox.includes("domeShaped")}
                    onChange={() => handleCheckboxChange("domeShaped")}
                  />
                  <label htmlFor="domeShaped">Dome Shaped</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="spherical"
                    checked={selectedCheckbox.includes("spherical")}
                    onChange={() => handleCheckboxChange("spherical")}
                  />
                  <label htmlFor="spherical">Spherical</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="pedunculated"
                    checked={selectedCheckbox.includes("pedunculated")}
                    onChange={() => handleCheckboxChange("pedunculated")}
                  />
                  <label htmlFor="pedunculated">Pedunculatedr</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="flatTopped"
                    checked={selectedCheckbox.includes("flatTopped")}
                    onChange={() => handleCheckboxChange("flatTopped")}
                  />
                  <label htmlFor="flatTopped">Flat Topped</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "distribution" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="symmetrical"
                    checked={selectedCheckbox.includes("symmetrical")}
                    onChange={() => handleCheckboxChange("symmetrical")}
                  />
                  <label htmlFor="symmetrical">Symmetrical</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="asymmetrical"
                    checked={selectedCheckbox.includes("asymmetrical")}
                    onChange={() => handleCheckboxChange("asymmetrical")}
                  />
                  <label htmlFor="asymmetrical">Asymmetrical</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="unilateral"
                    checked={selectedCheckbox.includes("unilateral")}
                    onChange={() => handleCheckboxChange("unilateral")}
                  />
                  <label htmlFor="unilateral">Unilateral</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="localised"
                    checked={selectedCheckbox.includes("localised")}
                    onChange={() => handleCheckboxChange("localised")}
                  />
                  <label htmlFor="localised">Localised</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="generalized"
                    checked={selectedCheckbox.includes("generalized")}
                    onChange={() => handleCheckboxChange("generalized")}
                  />
                  <label htmlFor="generalized">Generalized</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="sunExposed"
                    checked={selectedCheckbox.includes("sunExposed")}
                    onChange={() => handleCheckboxChange("sunExposed")}
                  />
                  <label htmlFor="sunExposed">Sun Exposed</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "arrangement" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="discrete"
                    checked={selectedCheckbox.includes("discrete")}
                    onChange={() => handleCheckboxChange("discrete")}
                  />
                  <label htmlFor="discrete">Discrete</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="coalescing"
                    checked={selectedCheckbox.includes("coalescing")}
                    onChange={() => handleCheckboxChange("coalescing")}
                  />
                  <label htmlFor="coalescing">Coalescing</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="disseminated"
                    checked={selectedCheckbox.includes("disseminated")}
                    onChange={() => handleCheckboxChange("disseminated")}
                  />
                  <label htmlFor="disseminated">Disseminated</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="annualar"
                    checked={selectedCheckbox.includes("annualar")}
                    onChange={() => handleCheckboxChange("annualar")}
                  />
                  <label htmlFor="annualar">Annualar</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="linear"
                    checked={selectedCheckbox.includes("linear")}
                    onChange={() => handleCheckboxChange("linear")}
                  />
                  <label htmlFor="linear">Linear</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="grouped"
                    checked={selectedCheckbox.includes("grouped")}
                    onChange={() => handleCheckboxChange("grouped")}
                  />
                  <label htmlFor="grouped">Grouped</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "surfacePalpation" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="smooth"
                    checked={selectedCheckbox.includes("smooth")}
                    onChange={() => handleCheckboxChange("smooth")}
                  />
                  <label htmlFor="smooth">Smooth</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="rough"
                    checked={selectedCheckbox.includes("rough")}
                    onChange={() => handleCheckboxChange("rough")}
                  />
                  <label htmlFor="rough">Rough</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="uneven"
                    checked={selectedCheckbox.includes("uneven")}
                    onChange={() => handleCheckboxChange("uneven")}
                  />
                  <label htmlFor="uneven">Uneven</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "deepPalpation" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="normal"
                    checked={selectedCheckbox.includes("normal")}
                    onChange={() => handleCheckboxChange("normal")}
                  />
                  <label htmlFor="normal">Normal</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="soft"
                    checked={selectedCheckbox.includes("soft")}
                    onChange={() => handleCheckboxChange("soft")}
                  />
                  <label htmlFor="soft">Soft</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="firm"
                    checked={selectedCheckbox.includes("firm")}
                    onChange={() => handleCheckboxChange("firm")}
                  />
                  <label htmlFor="firm">Firm</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="hard"
                    checked={selectedCheckbox.includes("hard")}
                    onChange={() => handleCheckboxChange("hard")}
                  />
                  <label htmlFor="hard">Hard</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "surfaceFeatureAndTexture" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="surfaceNormal"
                    checked={selectedCheckbox.includes("surfaceNormal")}
                    onChange={() => handleCheckboxChange("surfaceNormal")}
                  />
                  <label htmlFor="surfaceNormal">Normal</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="abnormalKeratinisation"
                    checked={selectedCheckbox.includes(
                      "abnormalKeratinisation"
                    )}
                    onChange={() =>
                      handleCheckboxChange("abnormalKeratinisation")
                    }
                  />
                  <label htmlFor="abnormalKeratinisation">
                    Abnormal Keratinisation
                  </label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="brokenSurface"
                    checked={selectedCheckbox.includes("brokenSurface")}
                    onChange={() => handleCheckboxChange("brokenSurface")}
                  />
                  <label htmlFor="brokenSurface">Broken Surface</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="changeInThickness"
                    checked={selectedCheckbox.includes("changeInThickness")}
                    onChange={() => handleCheckboxChange("changeInThickness")}
                  />
                  <label htmlFor="changeInThickness">Change In Thickness</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "abnormalKeratinisation" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="hyperkeratotic"
                    checked={selectedCheckbox.includes("hyperkeratotic")}
                    onChange={() => handleCheckboxChange("hyperkeratotic")}
                  />
                  <label htmlFor="hyperkeratotic">Hyperkeratotic</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="keratinHorn"
                    checked={selectedCheckbox.includes("keratinHorn")}
                    onChange={() => handleCheckboxChange("keratinHorn")}
                  />
                  <label htmlFor="keratinHorn">Keratin Horn</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="scale"
                    checked={selectedCheckbox.includes("scale")}
                    onChange={() => handleCheckboxChange("scale")}
                  />
                  <label htmlFor="scale">Scale</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "brokenSurface" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="exudate"
                    checked={selectedCheckbox.includes("exudate")}
                    onChange={() => handleCheckboxChange("exudate")}
                  />
                  <label htmlFor="exudate">Exudate</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="friable"
                    checked={selectedCheckbox.includes("friable")}
                    onChange={() => handleCheckboxChange("friable")}
                  />
                  <label htmlFor="friable">Friable</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="slough"
                    checked={selectedCheckbox.includes("slough")}
                    onChange={() => handleCheckboxChange("slough")}
                  />
                  <label htmlFor="slough">Slough</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="crust"
                    checked={selectedCheckbox.includes("crust")}
                    onChange={() => handleCheckboxChange("crust")}
                  />
                  <label htmlFor="crust">Crust</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="excoriation"
                    checked={selectedCheckbox.includes("excoriation")}
                    onChange={() => handleCheckboxChange("excoriation")}
                  />
                  <label htmlFor="excoriation">Excoriation</label>
                </div>
              </div>
            )}

            {selectedCurrentCheckbox === "changeInThickness" && (
              <div className="form-inputs">
                {/* {selectedCurrentCheckbox} */}
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="lichenification"
                    checked={selectedCheckbox.includes("lichenification")}
                    onChange={() => handleCheckboxChange("lichenification")}
                  />
                  <label htmlFor="lichenification">Lichenification</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="dermalAltropy"
                    checked={selectedCheckbox.includes("dermalAltropy")}
                    onChange={() => handleCheckboxChange("dermalAltropy")}
                  />
                  <label htmlFor="dermalAltropy">Dermal Altropy</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="epidermalAtropy"
                    checked={selectedCheckbox.includes("epidermalAtropy")}
                    onChange={() => handleCheckboxChange("epidermalAtropy")}
                  />
                  <label htmlFor="epidermalAtropy">Epidermal Atropy</label>
                </div>
                <div className="form-input">
                  <input
                    type="checkbox"
                    id="papillomatous"
                    checked={selectedCheckbox.includes("papillomatous")}
                    onChange={() => handleCheckboxChange("papillomatous")}
                  />
                  <label htmlFor="papillomatous">Papillomatous</label>
                </div>
              </div>
            )}
          </div>

          <div className="submit-container">
            <div className="arrowleft_btn" >
              <img src={arrowleft} className="arrowLeft" onClick={handlePrevCheckbox}  alt="Arrow Left"></img>
            </div>

            <button className="complaintform_btn" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <div>
        <h2>Selected Sites:</h2>
        <ul>
          {selectedCheckbox.map((site) => (
            <li key={site}>{site}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default Complaintform;
