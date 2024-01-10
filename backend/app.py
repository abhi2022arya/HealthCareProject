# from flask import Flask, request, jsonify
# from flask_sqlalchemy import SQLAlchemy
# from flask_marshmallow import Marshmallow
# from datetime import datetime


# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] =  'mysql+pymysql://root:''@localhost/healthcaredb'
# app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False

# db = SQLAlchemy(app)
# ma = Marshmallow(app)
# app.app_context().push()


# class registration(db.Model):
#     sno = db.Column(db.Integer,primary_key = True)
#     first_name = db.Column(db.String(100),nullable = False)
#     last_name = db.Column(db.String(100),nullable = False)
#     email = db.Column(db.String(255), nullable = False)
#     password = db.Column(db.String(128), nullable = False)
#     date_created = db.Column(db.DateTime,default = datetime.utcnow)

#     def __init__(self,first_name,last_name,email,password):
#         self.first_name = first_name
#         self.last_name = last_name
#         self.email = email
#         self.password = password

# class complaintform(db.Model):
#     id = db.Column(db.Integer,primary_key = True,autoincrement=True)
#     first_name = db.Column(db.String(255))
#     last_name = db.Column(db.String(255))
#     email = db.Column(db.String(255))
#     value = db.Column(db.String(255))
#     parent1 = db.Column(db.String(255), nullable=True, default=None) 
#     parent2 = db.Column(db.String(255), nullable=True, default=None) 
#     parent3 = db.Column(db.String(255), nullable=True, default=None) 
#     parent4 = db.Column(db.String(255), nullable=True, default=None) 



# class RegistrationSchema(ma.Schema):
#     class Meta:
#         fields = ('first_name','last_name','email','password','date_created')
# registration_schema = RegistrationSchema()

# @app.route('/signin', methods = ['POST'])
# def signin():
#     user_email = request.json.get('email')
#     user_password = request.json.get('password')

#     user = registration.query.filter_by(email = user_email).first() 
#     if user and user.password == user_password:
#         return registration_schema.jsonify(user)

#     else:
#         return jsonify({'error': 'Invalid Signin'})

# @app.route('/api', methods=['GET'])
# def user():
#     all_users = registration.query.all()
#     serialized_users = [{'sno': user.sno, 'first_name': user.first_name, 'last_name': user.last_name,
#                          'email': user.email, 'date_created': user.date_created.strftime('%Y-%m-%d %H:%M:%S')}
#                         for user in all_users]
#     return jsonify(serialized_users)

# @app.route('/registration', methods = ['POST'])
# def register():
#     first_name = request.json.get('first_name')
#     last_name = request.json.get('last_name')
#     email = request.json.get('email')
#     password = request.json.get('password')
#     confirm_password = request.json.get('confirm_password')

#     new_user = registration(first_name=first_name, last_name=last_name,email=email,password=password)
#     db.session.add(new_user)
#     db.session.commit()

#     return jsonify({"Message": "Registration done"})


# @app.route('/complaintform',methods = ['POST'])
# def complaint():
#     try:
#         data = request.get_json()
#         selected_head_sites = data.get("selectedHeadSites",[])
#         first_name = data.get("first_name")
#         last_name = data.get("last_name")
#         email = data.get("email")

#          # Store the selected checkbox values and their parent associations in the database
#         for value in selected_head_sites:
#             # Split the value into parent and child, assuming they are separated by a delimiter
#             child,parent1,parent2,parent3,parent4 = value.split('|')  # Adjust the delimiter as needed
#             complaintform_data = complaintform(first_name = first_name,last_name = last_name,email = email,value=child, parent1=parent1,parent2=parent2,parent3=parent3,parent4=parent4)
#             db.session.add(complaintform_data)


#         db.session.commit()
#         return jsonify({"message": "data submitted successfully"}),200

#     except Exception as e:
#         db.session.rollback()
#         return jsonify({"error": str(e)}), 500




# if __name__ == "__main__":
#     db.create_all()
#     app.run(debug = True)



from flask import Flask,request,jsonify
from py2neo import Graph, Node, Relationship

app = Flask(__name__)

NEO4J_URI = 'bolt://localhost:7687' 
NEO4J_USERNAME = 'neo4j' 
NEO4J_PASSWORD = 'password' 

# Configure Neo4j connection
graph = Graph(NEO4J_URI, auth=(NEO4J_USERNAME, NEO4J_PASSWORD))

# Global variable for the complaint ID counter
complaint_id_counter = 1

@app.route('/registration', methods=['POST'])
def register():
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    email = request.json.get('email')
    password = request.json.get('password')
    confirm_password = request.json.get('confirm_password')

    # Create a new user node with the provided information
    new_user = Node("User", first_name=first_name, last_name=last_name, email=email)

    # Assuming you already have a `graph` object for your Neo4j connection
    tx = graph.begin()
    tx.create(new_user)
    tx.commit()

    return jsonify({"Message": "Registration done"})


@app.route('/signin', methods=['POST'])
def signin():
    user_email = request.json.get('email')
    user_password = request.json.get('password')

    # Assuming your user nodes in Neo4j have labels, e.g., "User"
    query = f"MATCH (u:User {{email: '{user_email}'}}) WHERE u.password = '{user_password}' RETURN u"
    result = graph.run(query)

    user = result.data()
    
    if user:
        # Assuming you have a way to convert the user data to JSON
        user_data = {
            "email": user[0]['u']['email'],  # Assuming there's only one result
            # Include other user attributes here
        }
        return jsonify(user_data)
    else:
        return jsonify({'error': 'Invalid Signin'})


from flask import Flask, request, jsonify
from py2neo import Graph, Node, Relationship

app = Flask(__name__)

NEO4J_URI = 'bolt://localhost:7687' 
NEO4J_USERNAME = 'neo4j' 
NEO4J_PASSWORD = 'password' 

# Configure Neo4j connection
graph = Graph(NEO4J_URI, auth=(NEO4J_USERNAME, NEO4J_PASSWORD))

# Global variable for the complaint ID counter
complaint_id_counter = 1

@app.route('/registration', methods=['POST'])
def register():
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    email = request.json.get('email')
    password = request.json.get('password')
    confirm_password = request.json.get('confirm_password')

    # Create a new user node with the provided information
    new_user = Node("User", first_name=first_name, last_name=last_name, email=email)

    # Assuming you already have a `graph` object for your Neo4j connection
    tx = graph.begin()
    tx.create(new_user)
    tx.commit()

    return jsonify({"Message": "Registration done"})


@app.route('/signin', methods=['POST'])
def signin():
    user_email = request.json.get('email')
    user_password = request.json.get('password')

    # Assuming your user nodes in Neo4j have labels, e.g., "User"
    query = f"MATCH (u:User {{email: '{user_email}'}}) WHERE u.password = '{user_password}' RETURN u"
    result = graph.run(query)

    user = result.data()
    
    if user:
        # Assuming you have a way to convert the user data to JSON
        user_data = {
            "email": user[0]['u']['email'],  # Assuming there's only one result
            # Include other user attributes here
        }
        return jsonify(user_data)
    else:
        return jsonify({'error': 'Invalid Signin'})


@app.route('/submitComplaintForm', methods=['POST'])
def submit_complaint_form():
    try:
        data = request.json

        # Access the selectedCheckbox and selectedHeadSites from the received data
        selected_checkbox = data.get('selectedCheckbox')
        first_name = data.get('firstName')
        last_name = data.get('lastName')
        email = data.get('email')
       
#         checkbox_values = [
#     "gender", "male", "female", "sitesInvolved", "type", "lesion", "distribution",
#     "arrangement", "surfacePalpation", "deepPalpation", "surfaceFeatureAndTexture",
#     "head", "trunk", "extremities", "genitalia", "onsetOfLesion", "numberOfLesion",
#     "typeOfLesion", "colorOfLesion", "borderOfLesion", "shapeOfLesion", "normal",
#     "abnormalKeratinisation", "brokenSurface", "changeInThickness", "neck", "chest",
#     "flexors", "extensors", "anterior", "posterior", "flat", "raisedSolidLesion",
#     "fluidSolidLesion", "LesionDueToBrokenSurface", "otherTerms", "fromAbove", "inProfile",
#     "axilla", "groin", "hand", "leg"
# ]
#         # Create a dictionary to store the boolean values for each checkbox
#         checkbox_status = {}

#         # Initialize the boolean values to False for each checkbox
#         for checkbox in checkbox_values:
#             checkbox_status[f'is_{checkbox}'] = checkbox in selected_checkbox


  
        tx = graph.begin()
        
        complaint = Node("Complaint", type="complaints")
        tx.create(complaint)
        

        if "male" in selected_checkbox :
            male = Node("Gender", type="Male")     
            tx.create(male)
            graph.create(Relationship(complaint, "HAS", male))
           
            
        if "female" in selected_checkbox:
            if "sitesInvolved" in selected_checkbox:
                    sites_involved = Node("Sites involved", type="sites")
                    tx.create(sites_involved)
                    tx.create(Relationship(complaint, "HAS", sites_involved))
                  
            if "head" in selected_checkbox:
                head = Node("Head", type="head")
                tx.create(head)
                tx.create(Relationship(sites_involved, "HAS", head))

                checkboxes_in_head = ["face", "eyes", "nose", "ear", "lips", "mouthCavity", "neck"]

                for checkbox in checkboxes_in_head:
                    if checkbox in selected_checkbox:
                        node = Node(checkbox, type=checkbox)
                        tx.create(node)
                        tx.create(Relationship(head, "HAS", node))

                        # Additional conditions for specific checkboxes in "head"
                        if checkbox == "neck" and "neckAnterior" in selected_checkbox:
                            anterior = Node("anterior", type="anterior")
                            tx.create(anterior)
                            tx.create(Relationship(node, "HAS", anterior))

                        if checkbox == "neck" and "neckPosterior" in selected_checkbox:
                            posterior = Node("posterior", type="posterior")
                            tx.create(posterior)
                            tx.create(Relationship(node, "HAS", posterior))

            if "trunk" in selected_checkbox:
                trunk = Node("Trunk", type="trunk")
                tx.create(trunk)
                tx.create(Relationship(sites_involved, "HAS", trunk))
                checkboxes_in_trunk = ["chest", "abdomen", "umbilicus"]

                for checkbox in checkboxes_in_trunk:
                    if checkbox in selected_checkbox:
                        node = Node(checkbox, type=checkbox)
                        tx.create(node)
                        tx.create(Relationship(trunk, "HAS", node))

                        # Additional conditions for specific checkboxes in "trunk"
                        if checkbox == "chest":
                            subregion_checkboxes = ["onBreast", "onFold"]
                        elif checkbox == "abdomen":
                            subregion_checkboxes = []  # Add subregion checkboxes for abdomen if needed
                        elif checkbox == "umbilicus":
                            subregion_checkboxes = []  # Add subregion checkboxes for umbilicus if needed

                        for subregion_checkbox in subregion_checkboxes:
                            if subregion_checkbox in selected_checkbox:
                                subregion_node = Node(subregion_checkbox, type=subregion_checkbox)
                                tx.create(subregion_node)
                                tx.create(Relationship(node, "HAS", subregion_node))

            if "extremities" in selected_checkbox:
                extremities = Node("Extremities", type="extremities")
                tx.create(extremities)
                tx.create(Relationship(sites_involved, "HAS", extremities))

                checkboxes_in_extremities = ["flexors", "extensors"]

                for checkbox in checkboxes_in_extremities:
                    if checkbox in selected_checkbox:
                        node = Node(checkbox, type=checkbox)
                        tx.create(node)
                        tx.create(Relationship(extremities, "HAS", node))

                        # Additional conditions for specific checkboxes in "extremities"
                        if checkbox == "flexors":
                            subregion_checkboxes = ["axilla", "groin"]
                        elif checkbox == "extensors":
                            subregion_checkboxes = ["hand", "leg"]

                        for subregion_checkbox in subregion_checkboxes:
                            if subregion_checkbox in selected_checkbox:
                                subregion_node = Node(subregion_checkbox, type=subregion_checkbox)
                                tx.create(subregion_node)
                                tx.create(Relationship(node, "HAS", subregion_node))

                                # Additional conditions for specific subregion checkboxes
                                if subregion_checkbox == "axilla":
                                    side_checkboxes = ["axillaRight", "axillaLeft"]
                                elif subregion_checkbox == "groin":
                                    side_checkboxes = ["groinRight", "groinLeft"]
                                elif subregion_checkbox == "hand":
                                    side_checkboxes = ["handRight", "handLeft"]
                                elif subregion_checkbox == "leg":
                                    side_checkboxes = ["legRight", "legLeft"]

                                for side_checkbox in side_checkboxes:
                                    if side_checkbox in selected_checkbox:
                                        side_node = Node(side_checkbox, type=side_checkbox)
                                        tx.create(side_node)
                                        tx.create(Relationship(subregion_node, "HAS", side_node))
               
            if "genitalia" in selected_checkbox:
                genitalia = Node("Genitalia", type="genitalia")
                tx.create(genitalia)
                tx.create(Relationship(sites_involved, "HAS", genitalia))

                checkboxes_in_genitalia = ["genitaliaAnterior", "genitaliaPosterior"]

                for checkbox in checkboxes_in_genitalia:
                    if checkbox in selected_checkbox:
                        node = Node(checkbox, type=checkbox)
                        tx.create(node)
                        tx.create(Relationship(genitalia, "HAS", node))

                        # Additional conditions for specific checkboxes in "genitalia"
                        if checkbox == "genitaliaAnterior":
                            subregion_checkboxes = ["penileRegion", "scrotalRegion", "vaginalRegion", "perivaginalRegion"]
                        elif checkbox == "genitaliaPosterior":
                            subregion_checkboxes = ["analRegion", "perianalRegion"]

                        for subregion_checkbox in subregion_checkboxes:
                            if subregion_checkbox in selected_checkbox:
                                subregion_node = Node(subregion_checkbox, type=subregion_checkbox)
                                tx.create(subregion_node)
                                tx.create(Relationship(node, "HAS", subregion_node))


            if "type" in selected_checkbox:
                type_node = Node("Type", type="type")
                tx.create(type_node)
                tx.create(Relationship(complaint, "HAS", type_node))

                type_checkboxes = ["erythematous", "nonErythematous"]

                for checkbox in type_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(type_node, "HAS", checkbox_node))


            if "lesion" in selected_checkbox:
                lesion_node = Node("Lesion", type="lesion")
                tx.create(lesion_node)
                tx.create(Relationship(complaint, "HAS", lesion_node))

                lesion_checkboxes = [
                    "onsetOfLesion", "numberOfLesion", "typeOfLesion",
                    "colorOfLesion", "borderOfLesion", "shapeOfLesion"
                ]

            if "onsetOfLesion" in selected_checkbox:
                onset_of_lesion_node = Node("OnsetOfLesion", type="onsetOfLesion")
                tx.create(onset_of_lesion_node)
                tx.create(Relationship(lesion_node, "HAS", onset_of_lesion_node))
                onset_checkboxes = ["acute", "chronic"]

                for checkbox in onset_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(onset_of_lesion_node, "HAS", checkbox_node))

            if "numberOfLesion" in selected_checkbox:
                number_of_lesion_node = Node("NumberOfLesion", type="numberOfLesion")
                tx.create(number_of_lesion_node)
                tx.create(Relationship(lesion_node, "HAS", number_of_lesion_node))
                number_of_lesion_checkboxes = ["single", "multiple"]

                for checkbox in number_of_lesion_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(number_of_lesion_node, "HAS", checkbox_node))

            if "typeOfLesion" in selected_checkbox:
                type_of_lesion_node = Node("TypeOfLesion", type="typeOfLesion")
                tx.create(type_of_lesion_node)
                tx.create(Relationship(lesion_node, "HAS", type_of_lesion_node))

                type_of_lesion_checkboxes = [
                    "flat", "raisedSolidLesion", "fluidFilledLesion",
                    "lesionDueToBrokenSurface", "otherTerms"
                ]

                for checkbox in type_of_lesion_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(type_of_lesion_node, "TYPE IS", checkbox_node))

                        if checkbox == "flat":
                                subregion_checkboxes =  ["macule", "patch"]
                        elif checkbox == "raisedSolidLesion":
                                subregion_checkboxes =["papule", "nodule", "plaque"]
                        elif checkbox == "fluidFilledLesion":
                                subregion_checkboxes =["vesicle", "bulla", "pustules"]
                        elif checkbox == "lesionDueToBrokenSurface":
                                subregion_checkboxes = ["erosion", "ulcer", "fissure"]
                        elif checkbox == "otherTerms":
                                subregion_checkboxes =["weal", "cyst", "scar", "comedon", "burrow", "abscess"]
                      

                        for subregion_checkbox in subregion_checkboxes:
                                if subregion_checkbox in selected_checkbox:
                                    subregion_node = Node(subregion_checkbox, type=subregion_checkbox)
                                    tx.create(subregion_node)
                                    tx.create(Relationship(checkbox_node, "SUBTYPES", subregion_node))

            if "colorOfLesion" in selected_checkbox:
                color_of_lesion_node = Node("ColorOfLesion", type="colorOfLesion")
                tx.create(color_of_lesion_node)
                tx.create(Relationship(lesion_node, "HAS", color_of_lesion_node))
                color_of_lesion_checkboxes = [
                    "redPinkOrPurple", "blueBlack", "blackPurple",
                    "white", "brown", "yellow", "blueGray"
                ]

                for checkbox in color_of_lesion_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(color_of_lesion_node, "IS", checkbox_node))

            if "borderOfLesion" in selected_checkbox:
                border_of_lesion_node = Node("BorderOfLesion", type="borderOfLesion")
                tx.create(border_of_lesion_node)
                tx.create(Relationship(lesion_node, "HAS", border_of_lesion_node))
                border_of_lesion_checkboxes = [
                    "wellDefinedOrCircumscribed", "poorlyDefined", "accentuatedEdge"
                ]

                for checkbox in border_of_lesion_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(border_of_lesion_node, "HAS", checkbox_node))

            if "shapeOfLesion" in selected_checkbox:
                shape_of_lesion_node = Node("ShapeOfLesion", type="shapeOfLesion")
                tx.create(shape_of_lesion_node)
                tx.create(Relationship(lesion_node, "HAS", shape_of_lesion_node))
                shape_of_lesion_checkboxes = ["fromAbove", "inProfile"]

                for checkbox in shape_of_lesion_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(shape_of_lesion_node, "ANGLE", checkbox_node))

                       
                        if checkbox == "fromAbove":
                            subregion_checkboxes =  ["roundOrOval", "irregular", "squareOrRectangular", "serpiginous"]
                        elif checkbox == "inProfile":
                            subregion_checkboxes =["domeShaped", "spherical", "pedunculated", "flatTopped"]
                      

                        for subregion_checkbox in subregion_checkboxes:
                            if subregion_checkbox in selected_checkbox:
                                subregion_node = Node(subregion_checkbox, type=subregion_checkbox)
                                tx.create(subregion_node)
                                tx.create(Relationship(checkbox_node, "VIEW", subregion_node))


            if "distribution" in selected_checkbox:
                distribution_node = Node("distribution", type="distribution")
                tx.create(distribution_node)
                tx.create(Relationship(complaint, "HAS", distribution_node))

                distribution_checkboxes = ["symmetrical", "asymmetrical", "unilateral", "localised", "generalized", "sunExposed"]

                for checkbox in distribution_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(distribution_node, "HAS", checkbox_node))


            if "arrangement" in selected_checkbox:
                arrangement_node = Node("arrangement", type="arrangement")
                tx.create(arrangement_node)
                tx.create(Relationship(complaint, "HAS", arrangement_node))

                arrangement_checkboxes = ["discrete", "coalescing", "disseminated", "annualar", "linear", "grouped"]

                for checkbox in arrangement_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(arrangement_node, "HAS", checkbox_node))


            if "surfacePalpation" in selected_checkbox:
                surfacePalpation_node = Node("surfacePalpation", type="surfacePalpation")
                tx.create(surfacePalpation_node)
                tx.create(Relationship(complaint, "HAS", surfacePalpation_node))

                surfacePalpation_checkboxes = ["smooth", "rough", "uneven"]

                for checkbox in surfacePalpation_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(surfacePalpation_node, "HAS", checkbox_node))


            if "deepPalpation" in selected_checkbox:
                deepPalpation_node = Node("deepPalpation", type="deepPalpation")
                tx.create(deepPalpation_node)
                tx.create(Relationship(complaint, "HAS", deepPalpation_node))

                deepPalpation_checkboxes = ["normal", "soft", "firm", "hard"]

                for checkbox in deepPalpation_checkboxes:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(deepPalpation_node, "HAS", checkbox_node))


            if "surfaceFeatureAndTexture" in selected_checkbox:
                surface_Feature_And_Texture_Node = Node("surfaceFeatureAndTexture", type="surfaceFeatureAndTexture")
                tx.create(surface_Feature_And_Texture_Node)
                tx.create(Relationship(complaint, "HAS", surface_Feature_And_Texture_Node))
                
                surface_Feature_And_Texture_checkbox =  ["surfaceNormal", "abnormalKeratinisation", "brokenSurface", "changeInThickness"]

                for checkbox in  surface_Feature_And_Texture_checkbox:
                    if checkbox in selected_checkbox:
                        checkbox_node = Node(checkbox, type=checkbox)
                        tx.create(checkbox_node)
                        tx.create(Relationship(surface_Feature_And_Texture_Node, "HAS", checkbox_node))

                       
                        if checkbox == "surfaceNormal":
                            subregion_checkboxes = []
                        elif checkbox == "abnormalKeratinisation":
                            subregion_checkboxes = ["hyperkeratotic", "keratinHorn", "scale"]
                        elif checkbox == "brokenSurface":
                            subregion_checkboxes =["exudate", "friable", "slough", "crust", "excoriation"]
                        elif checkbox == "hard":
                            subregion_checkboxes = ["lichenification", "dermalAltropy", "epidermalAtropy", "papillomatous"]
                      

                        for subregion_checkbox in subregion_checkboxes:
                            if subregion_checkbox in selected_checkbox:
                                subregion_node = Node(subregion_checkbox, type=subregion_checkbox)
                                tx.create(subregion_node)
                                tx.create(Relationship(checkbox_node, "SUBTYPE_IS", subregion_node))

            if "scalp" in selected_checkbox:
                scalp = Node("Scalp", type="scalp")
                tx.create(scalp)
                tx.create(Relationship(head, "HAS", scalp))

                checkboxes_in_scalp = ["scalpNormal", "affectedScalpScaly"]

                for checkbox in checkboxes_in_scalp:
                    if checkbox in selected_checkbox:
                        node = Node(checkbox, type=checkbox)
                        tx.create(node)
                        tx.create(Relationship(scalp, "HAS", node))

                        # Additional conditions for specific checkboxes in "scalp"
                        if checkbox == "scalpNormal":
                            normal_checkboxes = ["oneOrSeveralAreasOfCompleteHairLoss", "completeHairLoss", "singleAreaHairsAllShort", "afroCaribbeanWithTightlyPlatedHair", "scalpMarginsOnlyAffected", "mothEatenAppearance"]
                            for normal_checkbox in normal_checkboxes:
                                if normal_checkbox in selected_checkbox:
                                    normal_node = Node(normal_checkbox, type=normal_checkbox)
                                    tx.create(normal_node)
                                    tx.create(Relationship(node, "HAS", normal_node))

                                    # Additional conditions for specific checkboxes under "scalpNormal"
                                    if normal_checkbox == "oneOrSeveralAreasOfCompleteHairLoss" and "markHairsAroundEdgeEyebrowsAndBeard" in selected_checkbox:
                                        mark_node = Node("markHairsAroundEdgeEyebrowsAndBeard", type="markHairsAroundEdgeEyebrowsAndBeard")
                                        tx.create(mark_node)
                                        tx.create(Relationship(normal_node, "HAS", mark_node))

                                        if "alopeciaAreata" in selected_checkbox:
                                            alopecia_node = Node("alopeciaAreata", type="alopeciaAreata")
                                            tx.create(alopecia_node)
                                            tx.create(Relationship(mark_node, "HAS", alopecia_node))
                                    
                                    elif normal_checkbox == "completeHairLoss":
                                        complete_loss_checkboxes = ["hairLossElseWhere"]
                                        for complete_loss_checkbox in complete_loss_checkboxes:
                                            if complete_loss_checkbox in selected_checkbox:
                                                loss_elsewhere_node = Node(complete_loss_checkbox, type=complete_loss_checkbox)
                                                tx.create(loss_elsewhere_node)
                                                tx.create(Relationship(normal_node, "HAS", loss_elsewhere_node))

                                                # Additional conditions for specific checkboxes under "completeHairLoss"
                                                if complete_loss_checkbox == "hairLossElseWhere" and "alopeciatotalisOrUniversalis" in selected_checkbox:
                                                    totalis_node = Node("alopeciatotalisOrUniversalis", type="alopeciatotalisOrUniversalis")
                                                    tx.create(totalis_node)
                                                    tx.create(Relationship(loss_elsewhere_node, "HAS", totalis_node))

                                    elif normal_checkbox == "singleAreaHairsAllShort":
                                        single_area_checkboxes = ["childrenOrTeenagers"]
                                        for single_area_checkbox in single_area_checkboxes:
                                            if single_area_checkbox in selected_checkbox:
                                                children_node = Node(single_area_checkbox, type=single_area_checkbox)
                                                tx.create(children_node)
                                                tx.create(Relationship(normal_node, "HAS", children_node))

                                                # Additional conditions for specific checkboxes under "singleAreaHairsAllShort"
                                                if single_area_checkbox == "childrenOrTeenagers" and "trichotillomania" in selected_checkbox:
                                                    trichotillomania_node = Node("trichotillomania", type="trichotillomania")
                                                    tx.create(trichotillomania_node)
                                                    tx.create(Relationship(children_node, "HAS", trichotillomania_node))

                                    elif normal_checkbox == "afroCaribbeanWithTightlyPlatedHair":
                                        afro_caribbean_checkboxes = ["hairHasPulledBackUnderTension"]
                                        for afro_caribbean_checkbox in afro_caribbean_checkboxes:
                                            if afro_caribbean_checkbox in selected_checkbox:
                                                pulled_back_node = Node(afro_caribbean_checkbox, type=afro_caribbean_checkbox)
                                                tx.create(pulled_back_node)
                                                tx.create(Relationship(normal_node, "HAS", pulled_back_node))

                                                # Additional conditions for specific checkboxes under "afroCaribbeanWithTightlyPlatedHair"
                                                if afro_caribbean_checkbox == "hairHasPulledBackUnderTension" and "tractionalopecia" in selected_checkbox:
                                                    tractional_node = Node("tractionalopecia", type="tractionalopecia")
                                                    tx.create(tractional_node)
                                                    tx.create(Relationship(pulled_back_node, "HAS", tractional_node))

                                    elif normal_checkbox == "scalpMarginsOnlyAffected":
                                        scalp_margins_checkboxes = ["anterior_Loss_Erythema_Around_Hairs_And_Eyebrows"]
                                        for scalp_margins_checkbox in scalp_margins_checkboxes:
                                            if scalp_margins_checkbox in selected_checkbox:
                                                anterior_loss_node = Node(scalp_margins_checkbox, type=scalp_margins_checkbox)
                                                tx.create(anterior_loss_node)
                                                tx.create(Relationship(normal_node, "HAS", anterior_loss_node))

                                                # Additional conditions for specific checkboxes under "scalpMarginsOnlyAffected"
                                                if scalp_margins_checkbox == "anterior_Loss_Erythema_Around_Hairs_And_Eyebrows" and "biopsy" in selected_checkbox:
                                                    biopsy_node = Node("biopsy", type="biopsy")
                                                    tx.create(biopsy_node)
                                                    tx.create(Relationship(anterior_loss_node, "HAS", biopsy_node))
                                                    if "frontal_Fibrosing_Alopecia" in selected_checkbox:
                                                        frontal_Fibrosing_Alopecia_node = Node("frontal_Fibrosing_Alopecia_node", type="frontal_Fibrosing_Alopecia_node")
                                                        tx.create(frontal_Fibrosing_Alopecia_node)
                                                        tx.create(Relationship(biopsy_node, "HAS", frontal_Fibrosing_Alopecia_node))

                                    elif normal_checkbox == "mothEatenAppearance":
                                        
                                       

                                        # Additional checkboxes related to "mothEatenAppearance"
                                        if "unwell_BodyRash_Lymphadenopathy" in selected_checkbox:
                                            unwell_node = Node("UnwellBodyRashLymphadenopathy", type="unwell_BodyRash_Lymphadenopathy")
                                            tx.create(unwell_node)
                                            tx.create(Relationship(normal_node, "HAS", unwell_node))

                                            # Additional checkboxes related to "unwell_BodyRash_Lymphadenopathy"
                                            if "secondary_Syphills" in selected_checkbox:
                                                syphills_node = Node("SecondarySyphills", type="secondary_Syphills")
                                                tx.create(syphills_node)
                                                tx.create(Relationship(unwell_node, "HAS", syphills_node))

                        elif checkbox == "affectedScalpScaly":
                          

                            # Additional checkboxes related to "affectedScalpScaly"
                            if "short_Broken_Off_Hairs" in selected_checkbox:
                                broken_hairs_node = Node("ShortBrokenOffHairs", type="short_Broken_Off_Hairs")
                                tx.create(broken_hairs_node)
                                tx.create(Relationship(node, "HAS", broken_hairs_node))

                                # Additional checkboxes related to "short_Broken_Off_Hairs"
                                if "mycology" in selected_checkbox:
                                    mycology_node = Node("Mycology", type="mycology")
                                    tx.create(mycology_node)
                                    tx.create(Relationship(broken_hairs_node, "HAS", mycology_node))

                                    if "positive" in selected_checkbox:
                                        positive_node = Node("positive", type="positive")
                                        tx.create(positive_node)
                                        tx.create(Relationship(mycology_node, "HAS", positive_node))

                                        if "scalpRingWorm" in selected_checkbox:
                                            ringworm_node = Node("ScalpRingWorm", type="scalpRingWorm")
                                            tx.create(ringworm_node)
                                            tx.create(Relationship(positive_node, "HAS", ringworm_node))

                                    # Additional checkboxes related to "positive"
                                    elif "mycologyNegative" in selected_checkbox:
                                        mycoNegative_node = Node("mycologyNegative", type="mycologyNegative")
                                        tx.create(mycoNegative_node)
                                        tx.create(Relationship(mycology_node, "HAS", mycoNegative_node))

                                        if "lichenSimplex_Psoriasis_PityriasisAmiantacea" in selected_checkbox:
                                            lichen_node = Node("lichenSimplex_Psoriasis_PityriasisAmiantacea", type="lichenSimplex_Psoriasis_PityriasisAmiantacea")
                                            tx.create(lichen_node)
                                            tx.create(Relationship(mycoNegative_node, "HAS", lichen_node))

                            # Additional checkboxes related to "affectedScalpScaly"
                            elif "thick_Scale_Present" in selected_checkbox:
                                scale_node = Node("ThickScalePresent", type="thick_Scale_Present")
                                tx.create(scale_node)
                                tx.create(Relationship(node, "HAS", scale_node))

                                # Additional checkboxes related to "thick_Scale_Present"
                                if "itching" in selected_checkbox:
                                    itching_node = Node("Itching", type="itching")
                                    tx.create(itching_node)
                                    tx.create(Relationship(scale_node, "HAS", itching_node))

                                    # Additional checkboxes related to "itching"
                                    if "itchingNegative" in selected_checkbox:
                                        lichen_node = Node("LichenSimplexPsoriasisPityriasisAmiantacea", type="lichenSimplex_Psoriasis_PityriasisAmiantacea")
                                        tx.create(lichen_node)
                                        tx.create(Relationship(itching_node, "HAS", lichen_node))




        graph.commit(tx)


        # Return success response
        return jsonify({"message": "Complaint submitted successfully"}), 200

    except Exception as e:
        # Log the error or handle it as needed
        print(f"Error: {str(e)}")
        
        # Return an error response
        return jsonify({"error": "Internal Server Error"}), 500


if __name__ == "__main__":
    app.run(debug=True, port=5001)  # Use an available port, e.g., 5001
