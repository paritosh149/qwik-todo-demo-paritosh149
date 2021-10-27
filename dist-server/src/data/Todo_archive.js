"use strict";
/**
 * @license
 * Copyright BuilderIO All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
Object.defineProperty(exports, "__esModule", { value: true });
const qwik_js_1 = require("../qwik.js");
const Todo_js_1 = require("./Todo.js");
exports.default = qwik_js_1.injectMethod(Todo_js_1.TodoEntity, //
async function archive() {
    const items = this.$state.items;
    const element = this.$element;
    const injector = qwik_js_1.getInjector(element);
    this.$state.items = (await Promise.all(items.map((key) => injector.getEntity(key))))
        .filter((itemEntity) => {
        const completed = itemEntity.$state.completed;
        if (completed) {
            itemEntity.$release();
        }
        return !completed;
    })
        .map((itemEntity) => itemEntity.$key);
    this.$state.completed = 0;
    this.setFilter(this.$state.filter);
    qwik_js_1.markDirty(this);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9kb19hcmNoaXZlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzcmMvZGF0YS9Ub2RvX2FyY2hpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7QUFFSCx3Q0FBa0U7QUFDbEUsdUNBQXVDO0FBRXZDLGtCQUFlLHNCQUFZLENBQ3pCLG9CQUFVLEVBQUUsRUFBRTtBQUNkLEtBQUssVUFBVSxPQUFPO0lBQ3BCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUIsTUFBTSxRQUFRLEdBQUcscUJBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqRixNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtRQUNyQixNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUM5QyxJQUFJLFNBQVMsRUFBRTtZQUNiLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN2QjtRQUNELE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDcEIsQ0FBQyxDQUFDO1NBQ0QsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxtQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEJ1aWxkZXJJTyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9CdWlsZGVySU8vcXdpay9ibG9iL21haW4vTElDRU5TRVxuICovXG5cbmltcG9ydCB7IGluamVjdE1ldGhvZCwgbWFya0RpcnR5LCBnZXRJbmplY3RvciB9IGZyb20gJy4uL3F3aWsuanMnO1xuaW1wb3J0IHsgVG9kb0VudGl0eSB9IGZyb20gJy4vVG9kby5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdE1ldGhvZChcbiAgVG9kb0VudGl0eSwgLy9cbiAgYXN5bmMgZnVuY3Rpb24gYXJjaGl2ZSh0aGlzOiBUb2RvRW50aXR5KSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLiRzdGF0ZS5pdGVtcztcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4kZWxlbWVudDtcbiAgICBjb25zdCBpbmplY3RvciA9IGdldEluamVjdG9yKGVsZW1lbnQpO1xuICAgIHRoaXMuJHN0YXRlLml0ZW1zID0gKGF3YWl0IFByb21pc2UuYWxsKGl0ZW1zLm1hcCgoa2V5KSA9PiBpbmplY3Rvci5nZXRFbnRpdHkoa2V5KSkpKVxuICAgICAgLmZpbHRlcigoaXRlbUVudGl0eSkgPT4ge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWQgPSBpdGVtRW50aXR5LiRzdGF0ZS5jb21wbGV0ZWQ7XG4gICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICBpdGVtRW50aXR5LiRyZWxlYXNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICFjb21wbGV0ZWQ7XG4gICAgICB9KVxuICAgICAgLm1hcCgoaXRlbUVudGl0eSkgPT4gaXRlbUVudGl0eS4ka2V5KTtcblxuICAgIHRoaXMuJHN0YXRlLmNvbXBsZXRlZCA9IDA7XG4gICAgdGhpcy5zZXRGaWx0ZXIodGhpcy4kc3RhdGUuZmlsdGVyKTtcbiAgICBtYXJrRGlydHkodGhpcyk7XG4gIH1cbik7XG4iXX0=