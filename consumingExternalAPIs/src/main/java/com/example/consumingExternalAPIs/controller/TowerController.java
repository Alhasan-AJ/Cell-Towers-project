package com.example.consumingExternalAPIs.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class TowerController {

  // endpoint to get all the cell towers details from the api
  @GetMapping("/towers")
  public Object getTower() {
    String url = "https://x8ki-letl-twmt.n7.xano.io/api:jjKtx4O-/api/v2/towers";
    RestTemplate restTemplate = new RestTemplate(); //created one restTemplate object

    try {
      Object towers = restTemplate.getForObject(url, Object[].class);
      return towers;
    } catch (Exception error) {
      error.printStackTrace();
      return null;
    }
  }

  // endpoint for getting the cell tower data for a certain filtering criteria
  @GetMapping("/query-towers")
  public ResponseEntity<List<Object>> getTowers(
    //using @RequestParam annotations for our query parameters
    @RequestParam(value = "tower_id", required = false) Integer towerID, //here each query parameter is optional
    @RequestParam(value = "operator", required = false) String networkOperator,
    @RequestParam(value = "technology", required = false) String technology,
    @RequestParam(value = "tower_type", required = false) String towerType) {

    // storing the external api in a string called url
    String url = "https://x8ki-letl-twmt.n7.xano.io/api:jjKtx4O-/api/v2/towers";
    RestTemplate restTemplate = new RestTemplate(); //created one restTemplate object

    // a try-catch block is used to handle any exceptions
    // by using restTemplate to send a request to the string url
    try {
      ResponseEntity<Object[]> response = restTemplate.getForEntity(url, Object[].class);
      List<Object> filtered_data = new ArrayList<>();   // creating a new empty list to store the filtered data

      // for loop to iterate over the cell towers that are retrieved
      // it checks if the cell tower matches a specific criteria, then it will be added to the filtered_data empty list
      for (Object cell_tower : response.getBody()) {
        if (match_filtered_criteria(cell_tower, towerID, networkOperator, technology, towerType)) {
          filtered_data.add(cell_tower);
        }
      }

      return ResponseEntity.ok(filtered_data);  // return the filtered_data list as the response body
    } catch (Exception e) {
      e.printStackTrace();
      return ResponseEntity.status(500).build();
    }
  }

  // This method will check if a given cell tower object matches the specific filtering criteria
  // it returns a boolean value
  private boolean match_filtered_criteria(
    Object cell_tower, Integer towerID, String networkOperator, String technology, String towerType) {
    if (!(cell_tower instanceof Map)) {     // checks if the cell_tower is an instance of a map, this ensure that the object could be applied with a filtering criteria
      return false;
    }
    // Casting the 'cell_tower' object to a Map
    Map<String, Object> cell_tower_data = (Map<String, Object>) cell_tower;

    // checks if the towerID is not null,
    // to compare it with the value of the key 'tower_id' in the map,
    // returns false if they do not match
    if (towerID != null && !towerID.equals(cell_tower_data.get("tower_id"))) {
      return false;
    }

    // checks if the networkOperator is not null and not empty,
    // to compare it with the value of the key 'networkOperator' in the map and ignoring the case
    // returns false if they do not match
    if (networkOperator != null && !networkOperator.isEmpty()) {
      String network_operator = (String) cell_tower_data.get("operator");
      if (network_operator == null || !network_operator.equalsIgnoreCase(networkOperator)) {
        return false;
      }
    }

    // checks if the technology is not null and not empty,
    // to compare it with the value of the key 'technology' in the map and ignoring the case
    // returns false if they do not match
    if (technology != null && !technology.isEmpty()) {
      String tower_technology = (String) cell_tower_data.get("technology");
      if (tower_technology == null || !tower_technology.equalsIgnoreCase(technology)) {
        return false;
      }
    }

    // checks if the towerType is not null and not empty,
    // to compare it with the value of the key 'towerType' in the map and ignoring the case
    // returns false if they do not match
    if (towerType != null && !towerType.isEmpty()) {
      String tower_type = (String) cell_tower_data.get("tower_type");
      return tower_type != null && tower_type.equalsIgnoreCase(towerType);
    }
    return true;
  }
}

// This endpoint was created to attempt retrieving the cell towers data by tower_id
//    @GetMapping("/towers/{tower_id}")
//    public ResponseEntity<Object> getTowerDetails(@PathVariable Long tower_id){
//        String url="https://x8ki-letl-twmt.n7.xano.io/api:jjKtx4O-/api/v2/towers/"+tower_id;
//
//        RestTemplate restTemplate = new RestTemplate();
//
//        try {
//            ResponseEntity<Object> response = restTemplate.getForEntity(url, Object.class);
//            if (response.getStatusCode().is2xxSuccessful()) {
//                return ResponseEntity.ok(response.getBody());
//            } else {
//                // Handle non-successful response
//                return ResponseEntity.status(response.getStatusCode()).body("Error fetching tower details");
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            return ResponseEntity.status(500).body("Internal Server Error");
//        }
//
//    }
//
//}

