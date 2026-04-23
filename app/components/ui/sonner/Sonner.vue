<script lang="ts" setup>
import type { ToasterProps } from "vue-sonner"
import { CircleCheckIcon, InfoIcon, Loader2Icon, OctagonXIcon, TriangleAlertIcon, XIcon } from "lucide-vue-next"
import { Toaster as Sonner } from "vue-sonner"
import { cn } from "@/lib/utils"

const props = defineProps<ToasterProps>()
</script>

<template>
  <Sonner
      :class="cn('toaster group', props.class)"
      :style="{
      '--normal-bg': 'rgba(40, 40, 48, 0.9)',
      '--normal-text': 'var(--foreground)',
      '--normal-border': 'rgba(255, 255, 255, 0.08)',
      '--success-bg': 'rgba(35, 165, 90, 0.15)',
      '--success-border': '#23a55a',
      '--error-bg': 'rgba(237, 66, 69, 0.15)',
      '--error-border': '#ed4245',
      '--warning-bg': 'rgba(245, 158, 11, 0.15)',
      '--warning-border': '#f59e0b',
      '--info-bg': 'rgba(88, 101, 242, 0.15)',
      '--info-border': '#5865f2',
      '--border-radius': '12px',
    }"
      v-bind="props"
  >
    <template #success-icon>
      <CircleCheckIcon class="size-5 text-success" />
    </template>
    <template #info-icon>
      <InfoIcon class="size-5 text-primary" />
    </template>
    <template #warning-icon>
      <TriangleAlertIcon class="size-5 text-warning" />
    </template>
    <template #error-icon>
      <OctagonXIcon class="size-5 text-danger" />
    </template>
    <template #loading-icon>
      <Loader2Icon class="size-5 animate-spin text-primary" />
    </template>
    <template #close-icon>
      <XIcon class="size-4 text-muted hover:text-foreground transition-colors" />
    </template>
  </Sonner>
</template>

<style>
.toaster[data-sonner-toaster] {
  --toast-width: 440px;
  --gap: 12px;
}

.toaster [data-sonner-toast] {
  backdrop-filter: blur(12px);
  background: var(--normal-bg) !important;
  border: 1px solid var(--normal-border) !important;
  border-radius: var(--border-radius) !important;
  padding: 16px 20px !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.02) !important;
  font-family: inherit;
  transition: all 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

/* Левый акцентный бордер */
.toaster [data-sonner-toast][data-type='success'] {
  border-left: 3px solid var(--success-border) !important;
}
.toaster [data-sonner-toast][data-type='error'] {
  border-left: 3px solid var(--error-border) !important;
}
.toaster [data-sonner-toast][data-type='warning'] {
  border-left: 3px solid var(--warning-border) !important;
}
.toaster [data-sonner-toast][data-type='info'] {
  border-left: 3px solid var(--info-border) !important;
}

/* Заголовок */
.toaster [data-sonner-toast] [data-title] {
  font-weight: 600;
  font-size: 1rem;
  color: var(--foreground);
  line-height: 1.4;
}

/* Описание */
.toaster [data-sonner-toast] [data-description] {
  font-size: 0.875rem;
  color: #9e9d9d !important;
  margin-top: 4px;
  line-height: 1.4;
}

/* Кнопка действия (action) */
.toaster [data-sonner-toast] [data-button] {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 4px 12px;
  height: auto;
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--primary);
  transition: background 0.2s;
}
.toaster [data-sonner-toast] [data-button]:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Кнопка закрытия */
.toaster [data-close-button] {
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 6px;
  color: var(--muted);
  transition: all 0.2s;
}
.toaster [data-close-button]:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--foreground);
}

/* Прогресс-бар */
.toaster [data-progress-bar] {
  background: var(--primary);
  height: 2px;
  bottom: 0;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

/* Анимация появления */
.toaster [data-sonner-toast][data-mounted='true'] {
  animation: slideIn 0.2s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>