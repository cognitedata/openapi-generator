/**
 * 
 * OpenAPI Petstore
 * 
 * 
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 * 
 * Version: 1.0.0
 * 
 * Generated by OpenAPI Generator: https://openapi-generator.tech
 */

// package openapi3graphql-server

// user_api

export default {
    Query: {

        // @return User
        GetUserByName: ($username) => {
            return {
                "username": "username_example"
            };
        },

        // @return String!
        LoginUser: ($username, $password) => {
            return {
                "username": "username_example",
                "password": "password_example"
            };
        },

        // @return 
        LogoutUser: () => {
            return {
                
            };
        },

    },

    Mutation: {

        // @return 
        CreateUser: ($user) => {
            return {
                "user": ""
            };
        },

        // @return 
        CreateUsersWithArrayInput: ($user) => {
            return {
                "user": ""
            };
        },

        // @return 
        CreateUsersWithListInput: ($user) => {
            return {
                "user": ""
            };
        },

        // @return 
        DeleteUser: ($username) => {
            return {
                "username": "username_example"
            };
        },

        // @return 
        UpdateUser: ($username, $user) => {
            return {
                "username": "username_example",
                "user": ""
            };
        },

    }
}