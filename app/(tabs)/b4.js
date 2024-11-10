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
						marginBottom: 29,
						marginLeft: 17,
					}}>
					{"Library"}
				</Text>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 8,
						marginHorizontal: 15,
					}}>
					<View 
						style={{
							width: 57,
							alignItems: "center",
							backgroundColor: "#E2F6FF",
							borderColor: "#E2DEDE",
							borderRadius: 8,
							borderWidth: 1,
							paddingVertical: 14,
							marginRight: 8,
						}}>
						<Text 
							style={{
								color: "#28779C",
								fontSize: 14,
							}}>
							{"Math"}
						</Text>
					</View>
					<View 
						style={{
							width: 76,
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#E2DEDE",
							borderRadius: 8,
							borderWidth: 1,
							paddingVertical: 14,
							marginRight: 8,
						}}>
						<Text 
							style={{
								color: "#707070",
								fontSize: 14,
							}}>
							{"Science"}
						</Text>
					</View>
					<View 
						style={{
							width: 72,
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#E2DEDE",
							borderRadius: 8,
							borderWidth: 1,
							paddingVertical: 14,
							marginRight: 8,
						}}>
						<Text 
							style={{
								color: "#707070",
								fontSize: 14,
							}}>
							{"Coding"}
						</Text>
					</View>
					<View 
						style={{
							width: 42,
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#E2DEDE",
							borderRadius: 8,
							borderWidth: 1,
							paddingVertical: 15,
						}}>
						<Text 
							style={{
								color: "#707070",
								fontSize: 14,
							}}>
							{"Art"}
						</Text>
					</View>
				</View>
				<View 
					style={{
						width: 92,
						height: 41,
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderColor: "#E2DEDE",
						borderRadius: 8,
						borderWidth: 1,
						paddingVertical: 15,
						marginBottom: 16,
						marginHorizontal: 15,
					}}>
					<Text 
						style={{
							color: "#707070",
							fontSize: 14,
						}}>
						{"Language"}
					</Text>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						borderColor: "#E2DEDE",
						borderRadius: 12,
						borderWidth: 1,
						padding: 12,
						marginBottom: 16,
						marginHorizontal: 15,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 106,
							height: 89,
						}}
					/>
					<View 
						style={{
							width: 221,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 18,
								marginBottom: 8,
							}}>
							{"Title of Course Name"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginBottom: 15,
							}}>
							{"Art History"}
						</Text>
						<View 
							style={{
								width: 49,
								height: 29,
								alignItems: "center",
								backgroundColor: "#34CC99",
								borderRadius: 4,
								paddingVertical: 8,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
								}}>
								{"100%"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						borderColor: "#E2DEDE",
						borderRadius: 12,
						borderWidth: 1,
						padding: 12,
						marginBottom: 16,
						marginHorizontal: 15,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 106,
							height: 89,
						}}
					/>
					<View 
						style={{
							width: 221,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 18,
								marginBottom: 8,
							}}>
							{"Title of Course Name"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginBottom: 15,
							}}>
							{"Art History"}
						</Text>
						<View 
							style={{
								width: 49,
								height: 29,
								alignItems: "center",
								backgroundColor: "#34CC99",
								borderRadius: 4,
								paddingVertical: 8,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
								}}>
								{"100%"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						borderColor: "#E2DEDE",
						borderRadius: 12,
						borderWidth: 1,
						padding: 12,
						marginBottom: 145,
						marginHorizontal: 15,
					}}>
					<Image
						source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 8,
							width: 106,
							height: 89,
						}}
					/>
					<View 
						style={{
							width: 221,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 18,
								marginBottom: 8,
							}}>
							{"Title of Course Name"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginBottom: 15,
							}}>
							{"Art History"}
						</Text>
						<View 
							style={{
								width: 49,
								height: 29,
								alignItems: "center",
								backgroundColor: "#34CC99",
								borderRadius: 4,
								paddingVertical: 8,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
								}}>
								{"100%"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						borderColor: "#5E27FD",
						borderWidth: 1,
						paddingVertical: 14,
						paddingHorizontal: 31,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 4,
						}}>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 16,
								height: 15,
							}}
						/>
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
								width: 23,
								height: 18,
								marginRight: 54,
							}}
						/>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 13,
								height: 17,
								marginRight: 56,
							}}
						/>
						<View 
							style={{
								width: 23,
								flexDirection: "row",
								alignItems: "center",
								marginRight: 52,
							}}>
							<View 
								style={{
									flex: 1,
								}}>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										height: 19,
										marginHorizontal: 6,
									}}
								/>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 9,
										height: 16,
									}}
								/>
								<Image
									source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 8,
										height: 16,
									}}
								/>
							</View>
						</View>
						<Image
							source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 18,
								height: 17,
							}}
						/>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginRight: 27,
							}}>
							{"Profile"}
						</Text>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginRight: 19,
							}}>
							{"Open Courses"}
						</Text>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
							}}>
							{"Courses"}
						</Text>
						<View 
							style={{
								flex: 1,
								alignSelf: "stretch",
							}}>
						</View>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
								marginRight: 38,
							}}>
							{"Games"}
						</Text>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 10,
							}}>
							{"Search"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}