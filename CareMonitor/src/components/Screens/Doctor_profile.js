import React, { useState }  from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';



const DoctorProfile = ({ navigation }) => {

  const aboutText = "Online bvikjhfdfcvg,djtjfgasdfgyudsj zsdfjgjmdsfytuiuhjk,mzxcdfghjv figudfjsdtfyfxcvvcg srdfe7yjuioucvb sdrtiuhjkvcvb zdfgth sxcmnhfjsdgfg xcjmcvj,nmjm,.dfgjkj hcvn cvbjk,fgh,bn.vknnb,fcg,vb dfghjkj bnm,.,yfgbuii, bnm,.ftyuin vcgh, bftyoijlkn fghioikjb vbnm cguhjklmnbm,. "; // Replace with your actual about text
  const maxChars = 100; // Maximum characters to display initially

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  const renderAboutText = () => {
    if (showFullText) {
      return (
        <Text style={styles.aboutText}>{aboutText}</Text>
      );
    } else {
      const truncatedText = aboutText.length > maxChars ? aboutText.slice(0, maxChars) + "..." : aboutText;
      return (
        <Text style={styles.aboutText}>{truncatedText}</Text>
      );
    }
  };



  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          style={styles.avatar}
          source={require('../assets/Avatar.png')} // Replace with your avatar image path
        />
        <Text style={styles.doctorName}>Dr. Thomas Shelby</Text>
        <Text style={styles.doctorSpeciality}>Cardiologist</Text>
      </View>

      {/* Information Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoItem1}>
              
              
                    <View style= {styles.starcontainer}>  
                            <Image 
                            style={styles.avatar}
                            source={require('../assets/star.png')}
                            />
                            <Text style={styles.infoNumber1}>5.0</Text>
                      </View>
                    
                      <Text style={styles.infoLabel1}>rating</Text>
              
        </View>
        <View style={styles.infoItem2}>
          <Text style={styles.infoNumber2}>55</Text>
          <Text style={styles.infoLabel2}>reviews</Text>
        </View>
        <View style={styles.infoItem3}>
          <Text style={styles.infoNumber3}>11 Years</Text>
          <Text style={styles.infoLabel3}> Experience</Text>
        </View>
      </View>

      {/* About the Doctor */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About the doctor</Text>

        {renderAboutText()}
        {aboutText.length > maxChars && (
          <TouchableOpacity onPress={toggleShowFullText}>
            <Text style={styles.viewAll}>{showFullText ? 'Show Less' : 'View All'}</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Specializations */}
      <View style={styles.specializationsSection}>
        <Text style={styles.sectionTitle}>Specializes at</Text>
        <View style={styles.specializationButtons}>
          <TouchableOpacity style={styles.specializationButton1}>
            <Text style={styles.specializationText}>Cardiology</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.specializationButton2}>
            <Text style={styles.specializationText}>Infections</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.specializationButton3}>
            <Text style={styles.specializationText}>Pulmonary Pathology</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Booking Section */}
      <View style={styles.bookingSection}>
        <Text style={styles.priceText}>$ 50.00</Text>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffff',
  },
  // Add more styles for each element here...
  // Example:
  header: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 60,
  },
  doctorName: {
    fontSize: 20,
    fontWeight: '500',
  },
  doctorSpeciality: {
    color: '#000000',
    fontWeight: '200',
  },
  infoSection: {
    flexDirection: 'row',
  },
  aboutSection: {
    color: '#D7EAF9',
  },
  avatar: {
    width: 70,
    height: 70,
    marginHorizontal: 10,
    marginTop: 2,
    //borderRadius: 50,
  },
  starcontainer: {
    flexDirection: 'row',
  },
  infoItem1: {
    backgroundColor: '#D7EAF9',
    borderColor: '#FDFFFF',
    borderRadius: 30,
    height: 105,
    width: 125,
     // Shadow effect
     shadowColor: 'black',
     shadowOffset: {
       width: 0,
       height: 2,
     },
     shadowOpacity: 0.25,
     shadowRadius: 3.84,
     elevation: 5, // For Android
    //margin: 15,
  },
  infoItem2: {
    alignSelf: 'center',
    margin: 25,
  },
  infoItem3: {
    backgroundColor: '#7808AD',
    borderColor: '#D776F9',
    borderRadius: 30,
    height: 78,
    width: 102,
    margin: -10,
    marginTop: 22,
    // Shadow effect
    shadowColor: 'black',
    shadowOffset: {
     width: 0,
     height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android
    //margin: 15,

  },
  infoNumber1: {
    fontWeight: '800',
    fontSize: 20,
    paddingRight: 10,
    marginTop: 25,
  },
  infoNumber2: {
    fontWeight: '800',
    fontSize: 20,
    alignSelf: 'center',
    //paddingRight: 10,
    //marginTop: 25,
  },
infoNumber3: {
  fontSize: 13,
  fontWeight:'900',
  alignSelf: 'center',
  color: '#ffff',
},
  infoLabel1: {
    fontSize: 20,
    color:'#5F5D5D',
    alignSelf: 'center',
  },
  infoLabel2: {
    fontSize: 16,
    color:'#5F5D5D',
    paddingBottom: 30,
    alignSelf: 'center',
  },
  infoLabel3: {
    fontSize: 12,
    //marginBottom: 40,
    color:'#ffff',
    alignSelf: 'center',
  },
  aboutTitle: {
    fontSize: 16,
    color:'#000000',
    fontWeight: '600',
  },
  aboutText: {
    justifyContent: 'center',
    fontSize: 13,
    color: '#A4A0A0',
    paddingTop: 12,
  },
  viewAll: {
    color: 'blue',
  },
  specializationButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'flex-start', // Align items at the beginning of the container
    marginBottom: 50,
  
  },
  specializationsSection: {
    paddingTop: 20,
  },
  sectionTitle:{
    marginBottom: 15,
  },
  specializationButton1: {
    borderColor: '#3C1AB9',
    borderRadius: 18,
    //backgroundColor: '#ffff',
    borderWidth: 2,
    padding: 15,
    width: 120,
    height: 50,
  
  

    // padding: 15,
    // width: '100%',
    // flexDirection: 'row',
    alignItems: 'center',

  },
  specializationButton2: {
    borderColor: '#3C1AB9',
    borderRadius: 18,
    //backgroundColor: '#ffff',
    borderWidth: 2,
    //padding: 15,
    width: 120,
    height: 45,
    //margin: 15,
    marginLeft: 15,
  
  

    // padding: 15,
    // width: '100%',
    // flexDirection: 'row',
    alignItems: 'center',

  },
  specializationButton3: {
    borderColor: '#3C1AB9',
    borderRadius: 18,
    //backgroundColor: '#ffff',
    borderWidth: 2,
    padding: 15,
    width: 120,
    height: 50,
  
  

    // padding: 15,
    // width: '100%',
    // flexDirection: 'row',
    alignItems: 'center',

  },
  specializationText: {
    alignSelf: 'center'
  }
  // ... and so on for other elements
});

export default DoctorProfile;