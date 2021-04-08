import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./index";

// TODO なんかうまくいかないので、あとで動くように直す
describe("スナップテスト", () => {
  it("Button Component Snapshot Test", () => {
    const component = renderer.create(
      <Button
        text="Button"
        isDisabled={false}
        onClick={() => alert("クリック")}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
