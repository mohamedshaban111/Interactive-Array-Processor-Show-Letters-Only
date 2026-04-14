/**
 * Function to process the array entered by the user
 * 1. Takes input
 * 2. Filters only strings (letters)
 * 3. Converts them to UpperCase
 * 4. Displays on screen
 */
function processArray() {
    // جلب القيمة من حقل الإدخال
    const inputField = document.getElementById("userInput");
    const displayArea = document.getElementById("screen-result");
    
    const rawValue = inputField.value;

    if (!rawValue.trim()) {
        displayArea.innerText = "Please enter some values first!";
        displayArea.style.color = "red";
        return;
    }

    // تحويل النص إلى مصفوفة وتنظيف المسافات الزائدة
    let rawArray = rawValue.split(",").map(item => item.trim());

    // تصفية المصفوفة:
    // نتحقق إذا كان العنصر ليس رقماً (أي أنه حرف) وليس فارغاً
    let finalResult = rawArray
        .filter(item => isNaN(item) && item !== "")
        .map(item => item.toUpperCase());

    // عرض النتيجة على الشاشة
    if (finalResult.length > 0) {
        displayArea.innerText = "[ " + finalResult.join(", ") + " ]";
        displayArea.style.color = "#1a73e8"; // لون أزرق للنجاح
    } else {
        displayArea.innerText = "No letters found in your input!";
        displayArea.style.color = "red";
    }
}