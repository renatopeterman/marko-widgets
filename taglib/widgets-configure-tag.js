module.exports = function render(input, out) {
    out.global.widgetsConfig.disableStateSerialization = input.serializeState === false;
};
