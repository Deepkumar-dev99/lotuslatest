import React from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
//import React from "react";
//import { SafeAreaView, View, ScrollView, Image, Text, } from "react-native";
//import LinearGradient from 'react-native-linear-gradient'; // Install LinearGradient: https://github.com/react-native-linear-gradient/react-native-linear-gradient
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
				}}>
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
					colors={["#CA6955", "#CF7067", "#D26187"]}
					style={{
						flexDirection: "row",
						alignItems: "center",
						paddingVertical: 22,
						paddingHorizontal: 16,
						marginBottom: 39,
					}}>
					<Image
						source = {require("../../assets/images/Mainwhitelogo.png")} 
						resizeMode = {"stretch"}
						style={{
							width: 39,
							height: 27,
							marginRight: 10,
						}}
					/>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 18,
						}}>
						{"Lotus Learning"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<View 
						style={{
							width: 16,
							marginRight: 24,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 13,
								marginBottom: 1,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 4,
								marginHorizontal: 5,
							}}
						/>
					</View>
					<View 
						style={{
							width: 16,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 1,
								marginBottom: 5,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 1,
								marginBottom: 5,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 1,
							}}
						/>
					</View>
				</LinearGradient>
				<Text 
					style={{
						color: "#000000",
						fontSize: 24,
						marginBottom: 35,
						marginLeft: 17,
					}}>
					{"Notifications"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 18,
						marginBottom: 19,
						marginLeft: 15,
					}}>
					{"Today"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 24,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 8,
							height: 8,
							backgroundColor: "#34CC99",
							borderRadius: 10,
							marginRight: 12,
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 14,
							width: 255,
						}}>
						{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 60,
							height: 60,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 30,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 8,
							height: 8,
							backgroundColor: "#34CC99",
							borderRadius: 10,
							marginRight: 12,
						}}>
					</View>
					<Text 
						style={{
							color: "#000000",
							fontSize: 14,
							width: 255,
						}}>
						{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 60,
							height: 60,
						}}
					/>
				</View>
				<Text 
					style={{
						color: "#000000",
						fontSize: 18,
						marginBottom: 19,
						marginLeft: 15,
					}}>
					{"Yesterday"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 24,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 8,
							height: 8,
							backgroundColor: "#FFFFFF",
							borderRadius: 10,
							marginRight: 12,
						}}>
					</View>
					<Text 
						style={{
							color: "#707070",
							fontSize: 14,
							width: 255,
						}}>
						{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 60,
							height: 60,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 24,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 8,
							height: 8,
							backgroundColor: "#FFFFFF",
							borderRadius: 10,
							marginRight: 12,
						}}>
					</View>
					<Text 
						style={{
							color: "#707070",
							fontSize: 14,
							width: 255,
						}}>
						{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 60,
							height: 60,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 20,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 8,
							height: 8,
							backgroundColor: "#FFFFFF",
							borderRadius: 10,
							marginRight: 12,
						}}>
					</View>
					<Text 
						style={{
							color: "#707070",
							fontSize: 14,
							width: 255,
						}}>
						{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
					</Text>
					<View 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</View>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 60,
							height: 60,
						}}
					/>
				</View>
				
			</ScrollView>
		</SafeAreaView>
	)
}