import { StyleSheet, Text, View } from "react-native";
import React, { Suspense, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { Loader } from "three";
import { TextureLoader } from "expo-three";
import { SensorType, useAnimatedSensor } from "react-native-reanimated";

function Shoe(props) {
  const [base, normal, rough] = useLoader(TextureLoader, [
    require("../assets/textures/BaseColor1.png"),
    require("../assets/textures/Normal.jpg"),
    require("../assets/textures/Roughness.png"),
  ]);

  const material = useLoader(MTLLoader, require("../assets/Airmax/shoe.mtl"));

  const obj = useLoader(
    OBJLoader,
    require("../assets/Airmax/shoe.obj"),
    (loader) => {
      material.preload();
      loader.setMaterials(material);
    }
  );

  const mesh = useRef();

  useLayoutEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
      }
    });
  }, [obj]);

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.7;
    // mesh.current.rotation.x += delta;
    let { x, y, z } = props.animatedSensor.sensor.value;
    x = ~~(x * 100) / 5000;
    y = ~~(y * 100) / 5000;
    mesh.current.rotation.x += x;
    mesh.current.rotation.y += y;
  });

  return (
    <mesh ref={mesh} rotation={[0.7, 0, 0]}>
      <primitive object={obj} scale={15} />
    </mesh>
  );
}

const Ar3 = () => {
  const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
    interval: 100,
  });
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <Shoe animatedSensor={animatedSensor} />
      </Suspense>
    </Canvas>
  );
};

export default Ar3;

const styles = StyleSheet.create({});
