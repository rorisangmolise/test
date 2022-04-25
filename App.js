import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,  TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Entypo, Feather, AntDesign,  Foundation, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.Container1}>
      <View style={styles.Container2}>
       <View style={styles.Topview}>
        <View style={styles.Buttons}>
         <TouchableOpacity style={{marginTop:2 , marginStart: '1%'}}>
           <Ionicons name="md-menu" size={42} color="white" style={{marginTop:'1%' , marginStart:'2%'}} />
         </TouchableOpacity>
         <TouchableOpacity style={{marginTop:2 , marginStart: '22%'}}>
           <Ionicons name="ios-notifications" size={30} color="white" style={{marginTop:'2%' , marginStart:'78%'}} />
           
          </TouchableOpacity>
        </View>
         <Image
         source={require("./assets/logo.png")} style={{ height: '70%' , width : '70%' ,  marginStart:'15%', }}/> 
      
       </View>
       <View style={styles.Options}>
         <View style={styles.OptionSection}>
           <TouchableOpacity>
             <Text style ={styles.OptionsText1}> Home </Text>
            </TouchableOpacity>
         </View>
         <View style={styles.OptionSection}>
           <TouchableOpacity>
             <Text style ={styles.OptionsText2}> Classroom </Text>
            </TouchableOpacity>
            <View style={styles.Selector}></View>
         </View>
         <View style={styles.OptionSection}>
           <TouchableOpacity>
             <Text style ={styles.OptionsText2}>School News</Text>
           </TouchableOpacity>
         </View>
         <View style={styles.OptionSection}>
           <TouchableOpacity>
             <Text style ={styles.OptionsText2}>Library </Text>
           </TouchableOpacity>
         </View>  
       </View>
      
       
         <View style={styles.Pop_Up_Bar}>
         <TouchableOpacity>
           <MaterialIcons name="cancel" size={32} color="#4FC3F7" style={{marginStart:'92%'}} />
         </TouchableOpacity>
           <View style={styles.Posts}>
             <View style={styles.Message}>
               <ImageBackground
               source={require("./assets/Awards.jpg")} style={{ height: '100%' , width : '100%'  }}>
               
               <Text style ={styles.MessageText}> Limkokwing awarded amazing gifts to it's best performing students today! </Text>
               <TouchableOpacity>
                 <Foundation name="play-video" size={50} color="white" style={{marginTop:'-50%', marginStart:80}} />
               </TouchableOpacity>
               </ImageBackground>    
             </View>
             <View style={styles.Message}>
             <ImageBackground
               source={require("./assets/memorial.png")} style={{ height: '100%' , width : '100%'  }}>
               <Text style ={styles.MessageText}> Memorial service for the Founder and President of the LUCT... </Text>
               <TouchableOpacity>
                 <Text style ={styles.ReadMore}> Read More </Text>
               </TouchableOpacity>
               </ImageBackground>
             </View>
           </View>
           
           <View style={styles.Reply}>
            <View style={styles.Icons}>
             <Text style ={styles. replyText}> Want to see this? </Text>
             <Ionicons name="md-information-circle-outline" size={24} color="#81D4FA" style={{marginStart:'14%'}} />
             <MaterialIcons name="cancel" size={22} color="#81D4FA"/>
            </View>
            
           
           <View style={styles.ReplySection}>
           <View style={styles.ReplyOptions}>
             <TouchableOpacity>
               <Text style ={styles.ShowText}> Don't show again</Text>
             </TouchableOpacity>
           </View>
           <View style={styles.ReplyOptions}>
             <TouchableOpacity>
               <Text style ={styles.ShowText}> Show later </Text>
             </TouchableOpacity>
           </View>
         </View>
         </View>
       
         </View>
         <ScrollView>
         <View style={styles.Classbar}>
           <View style={styles.Searchbar}>
             <TouchableOpacity>
               <Feather name="search" size={28} color="white" style={{marginTop:'3%' , marginStart:'12%'}} />
              </TouchableOpacity>
              <TouchableOpacity>
               <Text style ={styles.Text}> Search </Text>
              </TouchableOpacity>
           </View>
           <View style={styles.ViewAllBar}>
             <TouchableOpacity>
               <Text style ={styles.Text}> All Modules </Text>
             </TouchableOpacity>
             <TouchableOpacity>
               <AntDesign name="down" size={21} color="white"  style={{marginTop:'36%' , marginStart:'2%'}} />
             </TouchableOpacity>
           </View>
         </View>
         <View style={styles.Module}>
          <ImageBackground
            source={require("./assets/mobileP.jpg")} style={{ height: '100%' , width : '100%'  }}> 
           <Text style ={styles.moduleName}>MOBILE DEVICE PROGRAMMING</Text>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Lacture: Mr Nkhatho </Text>
           </View>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Time table: Wed - 08:00-10:00  </Text>
           </View>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Contents </Text>
             <TouchableOpacity style={{marginTop:'3%' , marginStart:'50%'}}>
               <AntDesign name="down" size={24} color="white"  style={{marginTop:'2%' , marginStart:'50%'}} />
             </TouchableOpacity>
           </View>
          </ImageBackground>
         </View>
         <View style={styles.Module}>
         <ImageBackground
          source={require("./assets/database.jpg")} style={{ height: '100%' , width : '99%', marginStart:'1%'  }}>
         <Text style ={styles.moduleName}>DATABASE APPLICATION</Text>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Lacture: Mrs Mahlakeng </Text>
           </View>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Time table: Wed - 14:00-16:00  </Text>
           </View>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Contents </Text>
             <TouchableOpacity style={{marginTop:'3%' , marginStart:'50%'}}>
               <AntDesign name="down" size={24} color="white"  style={{marginTop:'2%' , marginStart:'50%'}} />
             </TouchableOpacity>
           </View>
           </ImageBackground>
         </View>
   
         <View style={styles.Module}>
         <ImageBackground
            source={require("./assets/mobileP.jpg")} style={{ height: '100%' , width : '100%'  }}> 
           <Text style ={styles.moduleName}>C++ PROGRAMMING</Text>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Lacture: Mr Bhila </Text>
           </View>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Time table: Mon - 08:00-10:00  </Text>
           </View>
           <View style={styles.contents}>
             <Text style ={styles.Text}> Contents </Text>
             <TouchableOpacity style={{marginTop:'3%' , marginStart:'50%'}}>
               <AntDesign name="down" size={24} color="white"  style={{marginTop:'2%' , marginStart:'50%'}} />
             </TouchableOpacity>
           </View>
           </ImageBackground>
         </View>
         </ScrollView>
         <View style={styles.Contact}>
         <Text style ={styles.moduleName}>Follow us:</Text>
         <TouchableOpacity style={{marginTop:'3%' , marginStart:'5%'}}>
         <Ionicons name="md-logo-facebook" size={24} color="black" style={{marginTop:'3%' , marginStart:'5%'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'3%' , marginStart:'5%'}}>
         <Ionicons name="ios-logo-twitter" size={24} color="black"  style={{marginTop:'3%' , marginStart:'10%'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'3%' , marginStart:'2%'}}>
         <Ionicons name="ios-logo-instagram" size={24} color="black" style={{marginTop:'3%' , marginStart:'10%'}} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop:'3%' , marginStart:'2%'}}>
         <Ionicons name="ios-logo-youtube" size={24} color="black"  style={{marginTop:'3%' , marginStart:'10%'}}/>
         </TouchableOpacity>
  
          
         </View>
  
      </View>
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  Container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Container2:{
    backgroundColor: 'black',
    height: '100%' ,
    width : '100%' ,
    marginTop: '17%',
  },
  Topview:{
    backgroundColor: 'black',
    height: '17%' ,
    width : '100%' ,
    flexDirection:'column'
  },
  Buttons:{
    height: '30%' ,
    width : '100%' ,
    flexDirection:'row',
    backgroundColor:'black',
  },
  Options:{
    height: '5%' ,
    width : '100%' ,
    flexDirection:'row',
    backgroundColor: 'black',
    marginTop:'6%'
    
  },
  OptionsText1:{
    fontSize: 17,
    fontWeight: 'bold',
    color:'black',
    marginStart: '22%',
    marginTop: '8%',
  },
  OptionsText2:{
    fontSize:17,
    fontWeight: 'bold',
    color:'black',
    marginStart: '8%',
    marginTop: '8%',

  },
  OptionSection:{
    height: '100%' ,
    width : '27%' ,
    flexDirection:'column',
    backgroundColor: 'white',
    marginEnd:'1%'
  },
  Selector:{
    height: '9%' ,
    width : '90%' ,
    backgroundColor: '#4FC3F7',
    marginStart: '3%',
    marginTop:'5%'
    
  },
  Pop_Up_Bar:{
    backgroundColor: 'black',
    height: '28%' ,
    width : '100%' ,
    marginEnd:'33.33%',
    flexDirection:'column',
    marginTop:'2%',
    borderRadius: 16,
    borderWidth: 1,
    borderColor:'#81D4FA',
  
  },
  Posts:{
    height: '54%' ,
    width : '100%' ,
    flexDirection:'row',
    backgroundColor:'#E0E0E0'
  },
  MessageText:{
    fontSize:16,  
    color:'white',
    marginStart: '2%',
    marginTop: '30%',
  },
  Message:{
    backgroundColor: 'black',
    height: '100%' ,
    width : '49%' ,
    marginEnd:'2%',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  Reply:{
    backgroundColor: 'white',
    height: '27%' ,
    width : '70%' ,
    marginStart:'28%',
    flexDirection:'column',
    marginTop: 10,
    
  },
  Icons:{
    height: '36%' ,
    width : '100%' ,
    flexDirection:'row',
    backgroundColor:'white'
  },
  
  Classbar:{
    backgroundColor: 'black',
    height: '6%' ,
    width : '100%' ,
    flexDirection:'row',
    marginTop:'4%',
    marginBottom:'-3%'
  },
  Searchbar:{
    height: '100%' ,
    width : '33.33%' ,
    marginEnd:'33.33%',
    flexDirection:'row',
  },
  ViewAllBar:{
    height: '100%' ,
    width : '33.33%' ,
    flexDirection:'row',
    marginEnd:'1%',
  },
  ReplySection:{
    backgroundColor: 'black',
    height: '51%' ,
    width : '100%' ,
    flexDirection:'row',
    marginTop:'3%'
  },
  ReplyOptions:{
    height: '100%' ,
    width : '49%' ,
    flexDirection:'column',
    backgroundColor: '#B3E5FC',
    marginEnd:'2%'
    
    
  },
  Module:{
    backgroundColor: 'white',
    height:'29%',
    width:'100%',
    flexDirection:'column',
    marginTop:'2%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor:'#81D4FA',
  },
  Text:{
    fontSize:19,  
    color:'white',
    marginStart: '2%',
    marginTop: '4%',
  },

  ReadMore:{
    fontSize:16,  
    color:'#4FC3F7',
    marginStart: '40%',
    marginTop: '-11%',
  },
  replyText:{
    fontSize:16,  
    color:'#4FC3F7',
    marginStart: '25%',
  },
  ShowText:{
    fontSize:16,  
    color:'black',
    marginStart: '8%',
  },
  contents:{
  
    height: '25%' ,
    width : '90%' ,
    flexDirection:'row',
    marginStart:'4%'

  },
  moduleName:{
    fontSize:17,
    fontWeight: 'bold',
    color:'black',
    marginStart: '8%',
    marginTop: '3%', 
  },
  Contact:{
    backgroundColor: 'white',
    height:'10%',
    width:'100%',
    flexDirection:'column',
    borderWidth: 1,
    borderColor:'#81D4FA',
    flexDirection:'row'
  }
  

});
