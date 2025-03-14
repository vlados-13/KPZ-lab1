"use strict";
class Subscription {
    constructor(name, monthlyFee, minPeriod, channels, additionalFeatures) {
        this.name = name;
        this.monthlyFee = monthlyFee;
        this.minPeriod = minPeriod;
        this.channels = channels;
        this.additionalFeatures = additionalFeatures;
    }
    getDescription() {
        return `${this.name}: Monthly fee = $${this.monthlyFee}, Minimum period = ${this.minPeriod} month(s), Channels = ${this.channels.join(", ")}, Features = ${this.additionalFeatures.join(", ")}`;
    }
}
class DomesticSubscription extends Subscription {
    constructor() {
        super("Domestic Subscription", 10, 1, ["Channel 1", "Channel 2", "Channel 3"], ["Standard video quality", "Access to local channels"]);
    }
    createPurchaseMethod() {
        return new WebSite();
    }
}
class EducationalSubscription extends Subscription {
    constructor() {
        super("Educational Subscription", 15, 3, ["Channel 4", "Channel 5"], ["Access to educational content", "Offline viewing"]);
    }
    createPurchaseMethod() {
        return new MobileApp();
    }
}
class PremiumSubscription extends Subscription {
    constructor() {
        super("Premium Subscription", 30, 6, ["Channel 6", "Channel 7", "Channel 8", "Channel 9"], [
            "Ultra super HD video quality",
            "Access to all channels",
            "Exclusive content",
        ]);
    }
    createPurchaseMethod() {
        return new ManagerCall();
    }
}
class WebSite {
    purchase(subscription) {
        console.log(`Purchasing ${subscription.name} through Website`);
        console.log(subscription.getDescription());
    }
}
class MobileApp {
    purchase(subscription) {
        console.log(`Purchasing ${subscription.name} through Mobile App`);
        console.log(subscription.getDescription());
    }
}
class ManagerCall {
    purchase(subscription) {
        console.log(`Purchasing ${subscription.name} through Manager Call`);
        console.log(subscription.getDescription());
    }
}
const domesticSubscription = new DomesticSubscription();
const educationalSubscription = new EducationalSubscription();
const premiumSubscription = new PremiumSubscription();
console.log("----- Purchase through Website -----");
const websitePurchase = domesticSubscription.createPurchaseMethod();
websitePurchase.purchase(domesticSubscription);
console.log("\n----- Purchase through Mobile App -----");
const mobileAppPurchase = educationalSubscription.createPurchaseMethod();
mobileAppPurchase.purchase(educationalSubscription);
console.log("\n----- Purchase through Manager Call -----");
const managerCallPurchase = premiumSubscription.createPurchaseMethod();
managerCallPurchase.purchase(premiumSubscription);
