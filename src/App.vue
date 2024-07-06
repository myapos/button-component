<template>
  <main class="flex flex-col gap-12">
    <BaseRow>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.PRIMARY"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.PRIMARY"
        :placement="ICON_PLACEMENT.LEFT"
        :size="SIZES.LARGE"
        ><template #icon>
          <ButtonIcon />
        </template>
      </ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.PRIMARY"
        :placement="ICON_PLACEMENT.RIGHT"
        :size="SIZES.LARGE"
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.PRIMARY"
        :size="SIZES.TWO_EXTRA_LARGE"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.PRIMARY"
        :size="SIZES.TWO_EXTRA_LARGE"
        iconOnly
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
    </BaseRow>
    <BaseRow>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.SECONDARY"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.SECONDARY"
        :placement="ICON_PLACEMENT.LEFT"
        :size="SIZES.LARGE"
        ><template #icon>
          <ButtonIcon />
        </template>
      </ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.SECONDARY"
        :placement="ICON_PLACEMENT.RIGHT"
        :size="SIZES.LARGE"
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.SECONDARY"
        :size="SIZES.TWO_EXTRA_LARGE"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.SECONDARY"
        :size="SIZES.TWO_EXTRA_LARGE"
        iconOnly
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
    </BaseRow>
    <BaseRow>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.TERTIARY"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.TERTIARY"
        :placement="ICON_PLACEMENT.LEFT"
        :size="SIZES.LARGE"
        ><template #icon>
          <ButtonIcon />
        </template>
      </ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.TERTIARY"
        :placement="ICON_PLACEMENT.RIGHT"
        :size="SIZES.LARGE"
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.TERTIARY"
        :size="SIZES.TWO_EXTRA_LARGE"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.TERTIARY"
        :size="SIZES.TWO_EXTRA_LARGE"
        iconOnly
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
    </BaseRow>
    <BaseRow>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_COLOR"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_COLOR"
        :placement="ICON_PLACEMENT.LEFT"
        :size="SIZES.LARGE"
        ><template #icon>
          <ButtonIcon />
        </template>
      </ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_COLOR"
        :placement="ICON_PLACEMENT.RIGHT"
        :size="SIZES.LARGE"
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>

      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_COLOR"
        :size="SIZES.TWO_EXTRA_LARGE"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_COLOR"
        :size="SIZES.TWO_EXTRA_LARGE"
        iconOnly
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
    </BaseRow>
    <BaseRow>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_GRAY"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_GRAY"
        :placement="ICON_PLACEMENT.LEFT"
        :size="SIZES.LARGE"
        ><template #icon>
          <ButtonIcon />
        </template>
      </ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_GRAY"
        :placement="ICON_PLACEMENT.RIGHT"
        :size="SIZES.LARGE"
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_GRAY"
        :size="SIZES.TWO_EXTRA_LARGE"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.LINK_GRAY"
        :size="SIZES.TWO_EXTRA_LARGE"
        iconOnly
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
    </BaseRow>
    <BaseRow>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.DESTRUCTIVE"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.DESTRUCTIVE"
        :placement="ICON_PLACEMENT.LEFT"
        :size="SIZES.LARGE"
        ><template #icon>
          <ButtonIcon />
        </template>
      </ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.DESTRUCTIVE"
        :placement="ICON_PLACEMENT.RIGHT"
        :size="SIZES.LARGE"
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.DESTRUCTIVE"
        :size="SIZES.TWO_EXTRA_LARGE"
      />
      <ButtonComponent
        text="Button CTA"
        @[EVENTS.BUTTON_CLICKED]="onButtonClick"
        :variant="VARIANTS.DESTRUCTIVE"
        :size="SIZES.TWO_EXTRA_LARGE"
        iconOnly
        ><template #icon> <ButtonIcon /> </template
      ></ButtonComponent>
    </BaseRow>
  </main>
</template>

<script setup lang="ts">
import { EVENTS, VARIANTS, ICON_PLACEMENT, SIZES } from './components/constants'
import ButtonComponent from './components/ButtonComponent.vue'
import ButtonIcon from './components/ButtonIcon.vue'
import BaseRow from './components/BaseRow.vue'

const onButtonClick = () => {
  console.log('button clicked')
}
</script>

<style scoped></style>
