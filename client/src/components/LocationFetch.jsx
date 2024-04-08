import React from "react";

export async function fetchLocations() {
    try {
        const response = await fetch('http://localhost:5173/establishment');
        if (!response.ok) {
            throw new Error ('Failed to fetch restaurant locations');
        }
    }
}