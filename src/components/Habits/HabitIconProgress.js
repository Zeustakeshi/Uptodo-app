/**
 * 
 *        <Progress.Pie
                        progress={0.8}
                        size={90}
                        borderWidth={0}
                        color={colors.primary}
                        className="flex justify-center items-center relative top-0 left-0"
                    >
                        <View
                            style={{ width: 85, height: 85 }}
                            className="absolute bg-slate-200 rounded-full justify-center items-center "
                        >
                            <View
                                style={{ width: 80, height: 80 }}
                                className="rounded-full bg-red-500 p-2"
                            >
                                <Animatable.Image
                                    animation="zoomInDown"
                                    // iterationCount=""
                                    source={koalaEgg}
                                    resizeMode="contain"
                                    className="w-full h-full"
                                />
                            </View>
                        </View>
                    </Progress.Pie>
 * 
 * 
 */
