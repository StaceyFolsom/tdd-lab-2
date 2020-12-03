describe("translate", function() {
 // Tests for words starting with a vowel
    it("word starting with a", function() {
        expect(translate("apple")).toEqual("appleway");
  });

  it("word starting with o", function() {
    expect(translate("owl")).toEqual("owlway");
  });

  it("word starting with u", function() {
    expect(translate("under")).toEqual("underway");
  });

// Tests for words starting with one consonant
  it("word starting with one consonant - t", function() {
    expect(translate("tidy")).toEqual("idytay");
  });

  it("word starting with one consonant - z", function() {
    expect(translate("zebra")).toEqual("ebrazay");
  });

// Tests for words starting with two consonants
  it("word starting with two consonants - same", function () {
    expect(translate("llama")).toEqual("amallay");
  });

  it("word starting with two consonants - different", function () {
    expect(translate("blister")).toEqual("isterblay");
  });

// Tests for words starting with three consonants
  it("word starting with three consonants", function () {
    expect(translate("spleen")).toEqual("eensplay");
  });

  it("word starting with three consonants", function () {
    expect(translate("screwy")).toEqual("ewyscray");
  });

// Tests for non-lowercase words

  it("mixed case word", function () {
    expect(translate("MiXeD")).toEqual("ixedmay");
  });

  it("upper case word", function () {
    expect(translate("HORSE")).toEqual("orsehay");
  });

  it("mixed case word starting with upper case letter", function () {
    expect(translate("Snail")).toEqual("ailsnay");
  });

});