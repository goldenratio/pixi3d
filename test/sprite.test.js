import { expect } from "chai"
import { getImageDataFromRender, getImageDataFromUrl } from "./test-utils"

describe("Sprite", () => {
  it("should render correctly without billboard", async () => {
    let render = await getImageDataFromRender((renderer, resources) => {
      let sprite = new PIXI3D.Sprite3D(resources["assets/bunnies/rabbitv3.png"].texture)
      sprite.scale.set(10)
      sprite.rotationQuaternion.setEulerAngles(45, 45, 45)
      renderer.render(sprite)
    }, [
      "assets/bunnies/rabbitv3.png",
    ])
    expect(render).to.match(
      await getImageDataFromUrl("snapshots/hhpjd.png"), { threshold: 0.11 })
  })

  it("should render correctly with spherical billboard", async () => {
    let render = await getImageDataFromRender((renderer, resources) => {
      let sprite = new PIXI3D.Sprite3D(resources["assets/bunnies/rabbitv3.png"].texture)
      sprite.scale.set(10)
      sprite.rotationQuaternion.setEulerAngles(45, 45, 45)
      sprite.billboardType = PIXI3D.SpriteBillboardType.spherical
      renderer.render(sprite)
    }, [
      "assets/bunnies/rabbitv3.png",
    ])
    expect(render).to.match(
      await getImageDataFromUrl("snapshots/xsulf.png"), { threshold: 0.11 })
  })

  it("should render correctly with cylindrical billboard", async () => {
    let render = await getImageDataFromRender((renderer, resources) => {
      let sprite = new PIXI3D.Sprite3D(resources["assets/bunnies/rabbitv3.png"].texture)
      sprite.scale.set(10)
      sprite.rotationQuaternion.setEulerAngles(45, 45, 45)
      sprite.billboardType = PIXI3D.SpriteBillboardType.cylindrical
      renderer.render(sprite)
    }, [
      "assets/bunnies/rabbitv3.png",
    ])
    expect(render).to.match(
      await getImageDataFromUrl("snapshots/ehxit.png"), { threshold: 0.11 })
  })
})