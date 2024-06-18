import LoginForm from "@/components/login-form"
import BorderContainer from "../../components/border-container"
import "./style.css"
import SelectTank from "@/components/select-tank"
import GameBody from "@/components/game-body"
import FlowerPlant from "@/components/flower-plant"
import GameHeader from "@/components/game-header"
import SelectedObject from "@/components/selected-object"

export default function Home() {
  return (
    <div className="homepage h-screen">
      <div className="mx-auto">
        <div className="flex flex-col gap-8">
					<LoginForm  />
					<SelectTank />
          <BorderContainer className="header py-4 px-8">
            <GameHeader />
          </BorderContainer>
          <div className="flex gap-8">
            <GameBody />
            <div className="flex flex-col gap-8 flex-1 min-w-[300px]">
              <BorderContainer className="flex-1 p-8 bg-[burlywood]">
                <SelectedObject />
              </BorderContainer>
              <BorderContainer className="flex-1 p-8 bg-[burlywood]">
                <FlowerPlant />
              </BorderContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
