import React, { Component } from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// import "./Resume.css";
// import myResume from "./images/Resume.png";
// class Resume extends Component {
//   render() {
//     return (
//       <div className="Resume">
//         {/* <h2 className="Resume-name">Resume</h2> */}
//         <img className="Resume-image" src={myResume} alt="" />
//       </div>
//     );
//   }
// }

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4"
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
export default MyDocument;
