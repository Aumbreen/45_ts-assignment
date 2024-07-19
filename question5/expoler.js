var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var FamousPerson = "Albert Einstein";
var massage = "once said, who never made a  mistake never tried a anything new";
console.log(__makeTemplateObject(["(FamousPerson),(massage)"], ["(FamousPerson),(massage)"]));
