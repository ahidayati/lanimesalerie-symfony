/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AddressJsonld } from './address-jsonld';


export interface UserJsonld { 
    readonly context?: string | any | null;
    readonly id?: string;
    readonly type?: string;
    readonly id?: number;
    email?: string;
    roles?: Array<string>;
    password?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    birthDate?: string | null;
    phone?: string | null;
    addresses?: Array<AddressJsonld>;
    cart?: string | null;
    /**
     * A visual identifier that represents this user.
     */
    readonly userIdentifier?: string;
    readonly username?: string;
    /**
     * Returning a salt is only needed, if you are not using a modern hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     */
    readonly salt?: string | null;
}

