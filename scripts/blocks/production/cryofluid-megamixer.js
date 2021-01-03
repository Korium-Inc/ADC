const cm = extendContent(LiquidConverter, "cryofluid-megamixer", {
draw(){
Draw.rect(Core.atlas.find("additional-content-cryofluid-megamixer-bottom"), this.x, this.y);
Draw.rect(Core.atlas.find("additional-content-cryofluid-megamixer-liquid"), this.x, this.y);
Draw.rect(Core.atlas.find("additional-content-cryofluid-megamixer-top"), this.x, this.y);
}});
cm.drawer = new DrawMixer();