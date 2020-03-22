({
	handleOnChange : function(component, event, helper) {
		var selectedValue =component.find("parentPicklist").get("v.value");
        if(selectedValue){
            var mapOfDependentPicklistValue = component.get("v.mapOfDependentPicklistValue");
            component.set("v.dependentPicklistValue",mapOfDependentPicklistValue[selectedValue]);
            component.set("v.disableDependent",false);
        }else{
            component.set("v.dependentPicklistValue",null);
            component.set("v.disableDependent",true);
        }
	}
})