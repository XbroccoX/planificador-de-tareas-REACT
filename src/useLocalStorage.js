import React, { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorage.getItem(itemName))
                }
                setItem(parsedItem);

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        }, 3000)
    }, [])

    const saveItem = (newItem) => {
        try {
            const stringLocalStorage = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringLocalStorage);
            setItem(newItem);
        } catch (error) {
            setError(true);
        }
    }

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage }