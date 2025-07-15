import { FlatList, Image, ScrollView, StyleSheet, Text } from 'react-native';
import { View } from 'react-native';

function Dashboard() {
  const projectsData = [
    {
      id: 1,
      title: 'Invoice for Customers',
      category: 'Development',
      department: 'Engineering',
      projectSrc: require('../assets/paypal.png'),
      imgSrc: require('../assets/profile-pic1.png'),
      notifications: 9
    }
  ];
  
  const ProjectsCard = ({ project }: any) => {
    return (
      <View style={styles.firstCard}>
        <Image
          source={project.projectSrc}
          style={styles.imgStyle}
        />
        <View style={styles.textCard}>
          <Text style={styles.textStyle}>{project.title}</Text>
          <Text style={styles.secondtextStyle}>{project.category}</Text>
        </View>
        <View style={styles.insideCard}> 

          <Image
          source={project.imgSrc}
          style={styles.PorfilePic}
        />
        <Text style={styles.notificationtextStyle}>
          +{project.notifications}
        </Text>

        </View>
        
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image 
        source={require('../assets/add.png')}
        style={styles.addIcon}
        />
        <Text style={styles.topRowText}>
          All Projects
        </Text>
        <Image
          source={require('../assets/profile-pic1.png')}
          style={styles.PorfilePic}
        ></Image>
      </View>
      <FlatList 
      data={projectsData}
      renderItem={({item}) => <ProjectsCard project={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B9A4FF',
    paddingTop: 50,
    flex: 1
  },
  firstCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textStyle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 10,
  },
  topRow: {
    flexDirection: 'row',
    padding: 20,
    alignContent: 'center'
  },
  addIcon: {
    width: 30,
    height: 30,
    borderRadius: 5
  },
  topRowText: {
    fontSize: 26,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'

  },
  PorfilePic: {
    width: 40,
    height: 40,
  },
  textCard: {
    flexDirection: 'column'
  },
  secondtextStyle: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: 'medium'
  },
  insideCard: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center'
  },
  notificationtextStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    width: 35,
    height: 35,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: '#cbc9c9ff',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },

});
export default Dashboard;
