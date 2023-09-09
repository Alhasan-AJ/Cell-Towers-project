package com.example.consumingExternalAPIs.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class TowerController {
    @GetMapping("/towers")
    public Object getTower(){
        String url="https://x8ki-letl-twmt.n7.xano.io/api:jjKtx4O-/api/v2/towers";
        RestTemplate restTemplate=new RestTemplate(); //created one restTemplate object

        try {
            Object towers = restTemplate.getForObject(url,Object[].class);
            return towers;
        } catch (Exception error){
            error.printStackTrace();
            return null;
        }
    }

    @GetMapping("/query-towers")
    public ResponseEntity<List<Object>> getTowers(
            //using @RequestParam annotations for our query parameters
            @RequestParam(value = "tower_id", required = false) Integer towerID, //here each query parameter is optional
            @RequestParam(value = "operator", required = false) String networkOperator,
            @RequestParam(value = "technology", required = false) String technology,
            @RequestParam(value = "tower_type", required = false) String towerType){

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

    private boolean match_filtered_criteria(
            Object cell_tower, Integer towerID, String networkOperator, String technology, String towerType) {
        if (!(cell_tower instanceof Map)) {
            return false;
        }

        Map<String, Object> cell_tower_data = (Map<String, Object>) cell_tower;

        if (towerID != null && !towerID.equals(cell_tower_data.get("tower_id"))) {
            return false;
        }

        if (networkOperator != null && !networkOperator.isEmpty()) {
            String network_operator = (String) cell_tower_data.get("operator");
            if (network_operator == null || !network_operator.equalsIgnoreCase(networkOperator)){
                return false;
            }
        }

        if (technology != null && !technology.isEmpty()) {
            String tower_technology = (String) cell_tower_data.get("technology");
            if (tower_technology == null || !tower_technology.equalsIgnoreCase(technology)){
                return false;
            }
        }

        if (towerType != null && !towerType.isEmpty()) {
            String tower_type = (String) cell_tower_data.get("tower_type");
            return tower_type != null && tower_type.equalsIgnoreCase(towerType);
        }
        return true;
    }

}

