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
						marginBottom: 41,
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
								marginBottom: 0,
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
						marginBottom: 27,
						marginLeft: 16,
					}}>
					{"Account"}
				</Text>
				<Image
					source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
					resizeMode = {"stretch"}
					style={{
						width: 100,
						height: 100,
						marginBottom: 24,
						marginHorizontal: 16,
					}}
				/>
				<Text 
					style={{
						color: "#000000",
						fontSize: 20,
						marginBottom: 12,
						marginLeft: 16,
					}}>
					{"Insert Name Here"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 16,
						marginBottom: 31,
						marginLeft: 15,
					}}>
					{"Student/Learner"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 14,
						marginBottom: 16,
						marginLeft: 15,
					}}>
					{"Email:   johndoe@mail.com"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 15,
						marginHorizontal: 15,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 14,
							marginRight: 13,
						}}>
						{"Password:"}
					</Text>
					<Text 
						style={{
							color: "#8D8D8D",
							fontSize: 12,
							flex: 1,
						}}>
						{"●●●●●●●"}
					</Text>
				</View>
				<Text 
					style={{
						color: "#000000",
						fontSize: 14,
						marginBottom: 15,
						marginLeft: 15,
					}}>
					{"Phone Number: 416-111-1111"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 14,
						marginBottom: 14,
						marginLeft: 15,
					}}>
					{"Country: Canada"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 14,
						marginBottom: 15,
						marginLeft: 15,
					}}>
					{"Province: Ontario"}
				</Text>
				<Text 
					style={{
						color: "#000000",
						fontSize: 14,
						marginBottom: 34,
						marginLeft: 15,
					}}>
					{"City: Toronto"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 12,
						marginHorizontal: 16,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 20,
							marginRight: 15,
						}}>
						{"Personal Information"}
					</Text>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 15,
							height: 15,
						}}
					/>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						borderColor: "#34CC99",
						borderRadius: 10,
						borderWidth: 1,
						paddingVertical: 27,
						paddingHorizontal: 12,
						marginBottom: 203,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 18,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
							}}>
							{"Email Address:"}
						</Text>
						<Text 
							style={{
								color: "#757575",
								fontSize: 16,
							}}>
							{"johndoe@gmail.com"}
						</Text>
					</View>
					<View 
						style={{
							height: 1,
							backgroundColor: "#DFDFDF",
							marginBottom: 21,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 22,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginRight: 30,
							}}>
							{"Phone Number:"}
						</Text>
						<Text 
							style={{
								color: "#757575",
								fontSize: 16,
								flex: 1,
							}}>
							{"XXX-XXX-XXX"}
						</Text>
					</View>
					<View 
						style={{
							height: 1,
							backgroundColor: "#DFDFDF",
							marginBottom: 18,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 15,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginRight: 92,
							}}>
							{"Gender:"}
						</Text>
						<Text 
							style={{
								color: "#757575",
								fontSize: 16,
								flex: 1,
							}}>
							{"Male"}
						</Text>
					</View>
					<View 
						style={{
							height: 1,
							backgroundColor: "#DFDFDF",
							marginBottom: 21,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 18,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginRight: 85,
							}}>
							{"Country:"}
						</Text>
						<Text 
							style={{
								color: "#757575",
								fontSize: 16,
								flex: 1,
							}}>
							{"Canada"}
						</Text>
					</View>
					<View 
						style={{
							height: 1,
							backgroundColor: "#DFDFDF",
							marginBottom: 17,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 16,
								marginRight: 80,
							}}>
							{"Province:"}
						</Text>
						<Text 
							style={{
								color: "#757575",
								fontSize: 16,
								flex: 1,
							}}>
							{"Toronto"}
						</Text>
					</View>
				</View>
			
			</ScrollView>
		</SafeAreaView>
	)
}