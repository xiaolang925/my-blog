// ============================================================
// 收藏夹数据源
//
// 谁在用：src/pages/vault.astro（构建期读取，渲染成卡片网格）
// 改了会怎样：改这里 → 重新构建 → 收藏页内容变化
//
// 注意：这里只有数据，不要写 import、不要写页面逻辑。
// 真正的数据以后可能来自 Obsidian 同步，所以页面一律通过
// getBookmarksList() 取，不直接碰 bookmarksData。
// ============================================================
/**
 * 一条收藏。
 *
 * 字段刻意和 friends.ts 的 FriendItem 保持同构，
 * 这样卡片组件（VaultCard）能直接复用友链卡片的排版逻辑，
 * 字段一改就得同步改组件，别随手加字段。
 */
// 1)定义“一个收藏长什么样"——相当于C里的struct定义
export interface BookmarkItem{
    /** 稳定主键。用数字便于排序；将来做详情页 / 增删时靠它定位 */
    id:number;
    /** 卡片大标题。太长会被截断（卡片有 truncate），建议 12 字以内 */
    title:string;
    /**
	 * 左上角 64×64 图标地址。
	 * 坑：空字符串不会自动兜底，会渲染成一块空白方块。
	 * 最省事的做法是填该站点的 favicon 绝对地址。
	 */
    imgurl:string;
    /** 标题下方的两行描述。写"为什么收藏它"，比写"这是什么"有用 */
    desc:string;
    /**
	 * 跳转地址。⚠️ 必须是完整 URL，带 https://
	 * 原因：VaultCard 内部会执行 new URL(siteurl).hostname 取域名，
	 * 少了协议头会在【构建时】直接抛错，浏览器里看不到任何提示。
	 */
    siteurl:string;
    /** 底部小标签。这一版不做筛选，只为将来分组/搜索预留 */
    tags:string[];
}

/**
 * 收藏数据本体。
 *
 * 顺序 = 页面上的显示顺序（这一版不做排序逻辑，谁在前谁先显示）。
 * 加一条就在数组里加一个 { ... }，记得 id 递增、别重复。
 */
//2)真正的数据——相当于数据本体
export const bookmarksData:BookmarkItem[]=[
    {
        id:1,
        title:"Bilibili",
        imgurl:"https://www.bilibili.com/favicon.ico",
        desc:"看番,看视频",
        siteurl:"https://www.bilibili.com/",
        tags:["娱乐","视频"],    
    },
];

/**
 * 取收藏列表。
 *
 * 为什么要这层包装而不是直接导出 bookmarksData：
 *   页面里统一写 getBookmarksList()，将来数据改成从 JSON 加载、
 *   或者要加"随机排序/分组/过滤"，只改这个函数内部，
 *   vault.astro 一行都不用动。
 *   （friends.ts 的 getFriendsList 就是同一个套路）
 */

//3)对外只暴露一个"取数据"的函数，而不是直接让人访问数组
export function getBookmarksList():BookmarkItem[]{
    return bookmarksData;
}