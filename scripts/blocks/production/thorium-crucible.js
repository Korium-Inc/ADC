const tc = extendContent(GenericSmelter, "thorium-crucible", {
draw(){
Draw.rect(Core.atlas.find("additional-content-thorium-crucible-liquid"), this.x, this.y);
Draw.rect(Core.atlas.find("additional-content-thorium-crucible-top"), this.x, this.y);
}});