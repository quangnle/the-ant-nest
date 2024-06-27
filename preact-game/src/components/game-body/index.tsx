import BugList from "../bug-list"
import Market from "../market"
import { CANVAS_SIZE, CANVAS_WIDTH } from "../create-pattern/useCreatePattern"
import Menu from "../menu"
import IconButtons from "../icon-buttons"
import { BGM_ENABLE } from "@/core/gameState"

export default function GameBody({ loading }: { loading: boolean }) {
  return (
    <div className="game-body relative">
      <div className="flex gap-4">
        <div className="flex flex-col justify-between">
          {!loading && (
            <div className="flex flex-col gap-4 py-4">
              <BugList />
              <Market />
              <Menu />
            </div>
          )}
          <img
            src="/assets/euro-logo.png"
            className="absolute bottom-28 left-0 -translate-x-2/3 aspect-[4000/3113] w-[400px]"
          />
          <IconButtons onClick={() => {
            BGM_ENABLE.value = !BGM_ENABLE.value
          }} />
        </div>
        <canvas
          id="main-canvas"
          style={{
            width: CANVAS_WIDTH,
            height: CANVAS_SIZE,
          }}
        />
      </div>
    </div>
  )
}
