// src/utilities/localStorage.js বা আপনার ফোল্ডার অনুযায়ী localStoregeData.js

// এখানে গ্লোবাল 'localStorage' সরাসরি ব্যবহার করা হয়েছে, কোনো ইম্পোর্ট লাগেনি।
const getStoredItems = (key) => {
    // সমস্যা সমাধানের জন্য একটি নিরাপত্তা চেক যোগ করা হলো
    if (typeof window === 'undefined' || !window.localStorage) {
        return []; 
    }
    
    const storedItems = localStorage.getItem(key); // ব্রাউজারের গ্লোবাল localStorage
    if (storedItems) {
        return JSON.parse(storedItems);
    }
    return [];
}

const saveToStorage = (key, item) => {
    // সমস্যা সমাধানের জন্য একটি নিরাপত্তা চেক যোগ করা হলো
    if (typeof window === 'undefined' || !window.localStorage) {
        return false;
    }
    
    const storedItems = getStoredItems(key);
    // ... (বাকি লজিক)
    
    const exists = storedItems.find(storedItem => storedItem.bookId === item.bookId);
    
    if (!exists) {
        storedItems.push(item);
        localStorage.setItem(key, JSON.stringify(storedItems)); // ব্রাউজারের গ্লোবাল localStorage
        return true; 
    }
    return false;
}

// এই ফাংশনগুলিকেই কেবল এক্সপোর্ট করতে হবে
export { getStoredItems, saveToStorage };